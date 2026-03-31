"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateBlogMutation } from "@/src/redux/admin/cms/blog/blogApi";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

interface BlogFormData {
  thumbnail: FileList | null;
  title: string;
  author: string;
  description: string;
  category: string;
  status: string;
  tags: string[];

  contentSections: {
    title: string;
    content: string;
  }[];

  imageSections: {
    image: File | null;
    imageTitle: string;
    imageContent: string;
  }[];
}

enum CategoryEnum {
  RIDER_SPOTLIGHTS = "RIDER_SPOTLIGHTS",
  SPORT_HIGHLIGHTS = "SPORT_HIGHLIGHTS",
  ON_THE_ROAD = "ON_THE_ROAD",
  ARION_WORLD = "ARION_WORLD",
}
enum StatusEnum {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

export function BlogForm() {
  const { control, register, handleSubmit, setValue, watch, reset, getValues, formState: { errors } } =
    useForm<BlogFormData>({
      defaultValues: {
        thumbnail: null,
        title: "",
        author: "",
        description: "",
        category: "",
        status: "",
        tags: [],
        contentSections: [],
        imageSections: [],
      },
    });

  const { fields: contentFields, append: addContent } = useFieldArray({
    control,
    name: "contentSections",
  });

  const {
    fields: imageFields,
    append: addImage,
    remove: removeImageSection,
  } = useFieldArray({
    control,
    name: "imageSections",
  });

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const [imagePreviews, setImagePreviews] = useState<Record<number, string>>(
    {},
  );

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [tagInput, setTagInput] = useState("");
  const router = useRouter()
  const tags = watch("tags");



  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (!trimmed) return;
    const currentTags = getValues("tags");
    setValue("tags", [...currentTags, trimmed], { shouldValidate: true });
    setTagInput("");
  };

  const handleRemoveTag = (indexToRemove: number) => {
    const currentTags = getValues("tags");
    setValue("tags", currentTags.filter((_, i) => i !== indexToRemove), { shouldValidate: true });
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };



  const previewThumbnail = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => setThumbnailPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const previewImageSection = (file: File, index: number) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviews((prev) => ({
        ...prev,
        [index]: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  const [createBlog, { isLoading }] = useCreateBlogMutation();

  const onSubmit = async (data: BlogFormData) => {
    try {
      const formData = new FormData();

      // BASIC FIELDS
      formData.append("title", data.title);
      formData.append("authorName", data.author);
      formData.append("descriptions", data.description);
      formData.append("category", data.category);
      formData.append("status", data.status);

      data?.tags?.forEach((tag) => {
        formData.append("tags", tag);
      });

      // THUMBNAIL
      if (data.thumbnail?.[0]) {
        formData.append("thumbnail", data.thumbnail[0]);
      }

      data.imageSections.forEach((section) => {
        if (section.image) {
          formData.append("contentImages", section.image);
        }
      });

      const contentImagesMeta = data.imageSections.map((section) => ({
        imageTitle: section.imageTitle,
        imageDetail: section.imageTitle,
        imageDescription: section.imageContent,
      }));

      formData.append("contentImagesMeta", JSON.stringify(contentImagesMeta));
      const response = await createBlog(formData).unwrap();
      console.log(response)
      if (response?.statusCode === 201) {
        toast.success(response?.message);
        reset()

        router.push("/admin/cms")
      }
    } catch (error) {
      console.error("CREATE BLOG FAILED:", error);
      toast.error(error?.data?.message?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* THUMBNAIL */}
        <div className="lg:col-span-1">
          <Controller
            name="thumbnail"
            control={control}
            render={({ field }) => (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      field.onChange(e.target.files);
                      previewThumbnail(e.target.files[0]);
                    }
                  }}
                />

                {thumbnailPreview ? (
                  <img
                    src={thumbnailPreview}
                    className="h-48 w-full object-cover rounded"
                  />
                ) : (
                  <div className="py-10">
                    <Upload className="mx-auto mb-2 text-gray-400" />
                    <p className="text-sm">Upload Thumbnail</p>
                  </div>
                )}
              </div>
            )}
          />
        </div>

        {/* MAIN FORM */}
        <div className="lg:col-span-3 space-y-6">
          <label
            htmlFor="title"
            className="mb-1 block text-[#696E86] text-[12px]"
          >
            Blog Title*
          </label>
          <input
            {...register("title", { required: true })}
            placeholder="Blog title"
            className="w-full p-3 border rounded-lg"
          />
          <label
            htmlFor="author"
            className="mb-1 block text-[#696E86] text-[12px]"
          >
            Author
          </label>
          <input
            {...register("author", {
              required: true,
            })}
            placeholder="Author name"
            className="w-full p-3 border rounded-lg"
          />
          <label
            htmlFor="description"
            className="mb-1 block text-[#696E86] text-[12px]"
          >
            Blog Description
          </label>
          <textarea
            {...register("description")}
            rows={4}
            placeholder="Blog description"
            className="w-full p-4 border rounded-lg"
          />

          {/* ADD BUTTONS */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() =>
                addContent({
                  title: "",
                  content: "",
                })
              }
              className="border border-dashed px-4 py-2 rounded-md text-sm"
            >
              + Add content section
            </button>

            <button
              type="button"
              onClick={() =>
                addImage({
                  image: null,
                  imageTitle: "",
                  imageContent: "",
                })
              }
              className="border border-dashed px-4 py-2 rounded-md text-sm"
            >
              + Add image section
            </button>
          </div>

          {/* CONTENT SECTIONS */}
          {contentFields.map((field, index) => (
            <div key={field.id} className="space-y-2">
              <input
                {...register(`contentSections.${index}.title`)}
                placeholder="Section title"
                className="w-full p-3 border rounded"
              />
              <textarea
                {...register(`contentSections.${index}.content`)}
                rows={4}
                placeholder="Section content"
                className="w-full p-3 border rounded"
              />
            </div>
          ))}

          {/* IMAGE SECTIONS */}
          {imageFields.map((field, index) => {
            const preview = imagePreviews[index];

            return (
              <div
                key={field.id}
                className="border rounded-lg p-4 space-y-4 bg-[#F9FAFB]"
              >
                {/* DROP AREA */}
                <div
                  onClick={() =>
                    document.getElementById(`image-input-${index}`)?.click()
                  }
                  className="relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer"
                >
                  <input
                    id={`image-input-${index}`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      setValue(`imageSections.${index}.image`, file);
                      previewImageSection(file, index);
                    }}
                  />

                  {preview ? (
                    <img
                      src={preview}
                      className="h-48 w-full object-cover rounded"
                    />
                  ) : (
                    <div className="py-8">
                      <Upload className="mx-auto mb-2 text-gray-400" />
                      <p className="text-sm font-medium">
                        Drop & Drag / Upload Image
                      </p>
                      <p className="text-xs text-gray-500">
                        JPEG, PNG · Max 12mb
                      </p>
                    </div>
                  )}

                  {preview && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setValue(`imageSections.${index}.image`, null);
                        setImagePreviews((prev) => {
                          const copy = {
                            ...prev,
                          };
                          delete copy[index];
                          return copy;
                        });
                      }}
                      className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs shadow"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <input
                  {...register(`imageSections.${index}.imageTitle`)}
                  placeholder="Image title"
                  className="w-full p-3 border rounded"
                />

                <textarea
                  {...register(`imageSections.${index}.imageContent`)}
                  rows={3}
                  placeholder="Image description"
                  className="w-full p-3 border rounded"
                />

                <button
                  type="button"
                  onClick={() => {
                    removeImageSection(index);
                    setImagePreviews((prev) => {
                      const copy = {
                        ...prev,
                      };
                      delete copy[index];
                      return copy;
                    });
                  }}
                  className="text-sm text-red-500"
                >
                  Remove image section
                </button>
              </div>
            );
          })}

          {/* CATEGORY */}
          <label className="mb-1 block text-[#696E86] text-[12px]">
            Category *
          </label>

          <Controller
            name="category"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full py-6">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>

                <SelectContent>
                  {Object.values(CategoryEnum).map((item) => (
                    <SelectItem key={item} value={item}>
                      {item.replace(/_/g, " ")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {/* status */}
          <label className="mb-1 block text-[#696E86] text-[12px]">
            Status *
          </label>

          <Controller
            name="status"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full py-6">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>

                <SelectContent>
                  {Object.values(StatusEnum).map((item) => (
                    <SelectItem key={item} value={item}>
                      {item.replace(/_/g, " ")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          <div className="space-y-2">
            <label className="block text-[#696E86] text-[12px]">
              Tags *
            </label>

            {/* Hidden input for RHF validation */}
            <input
              type="hidden"
              {...register("tags", {
                validate: (value) =>
                  value.length > 0 || "At least one tag is required",
              })}
            />

            {/* Tag input + Add button */}
            <div className="relative">
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder="Type a tag and press Enter or click Add"
                className="w-full p-3 border rounded-lg"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="absolute cursor-pointer right-0 top-1/2 h-full px-4 rounded-r-lg -translate-y-1/2 bg-[#1F274B] text-white  text-sm whitespace-nowrap"
              >
                + Add
              </button>
            </div>

            {/* Error message */}
            {errors.tags && (
              <p className="text-red-500 text-sm">{errors.tags.message as string}</p>
            )}

            {/* Tag pills */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 bg-gray-100 border border-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(i)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* <div className=" flex items-end justify-end">
            <button
              type="submit"
              className="bg-[#1F274B] hover:bg-[#1F274B]/90 cursor-pointer text-white px-4 py-2 rounded-[4px]"
            >
              Publish
            </button>
          </div> */}
          <div className="flex items-end justify-end mt-10">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#1F274B] hover:bg-[#1F274B]/90 cursor-pointer text-white px-4 py-2 rounded-[4px] flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Publishing...
                </>
              ) : (
                "Publish Blogs"
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
