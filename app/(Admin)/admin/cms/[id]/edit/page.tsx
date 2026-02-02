"use client";

import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "@/src/redux/admin/cms/blog/blogApi";
import { Upload } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

interface BlogEditPageData {
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

const BlogEditPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { data } = useGetSingleBlogQuery(id);
  const { control, register, handleSubmit, setValue, watch, reset } =
    useForm<BlogEditPageData>({
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

  useEffect(() => {
    if (!data?.data) return;

    const blog = data?.data;

    reset({
      title: blog.title ?? "",
      author: blog.authorName ?? "",
      description: blog.descriptions ?? "",
      category: blog.category ?? "",
      status: blog.status ?? "",
      tags: blog.tags ?? [],

      contentSections:
        blog.contentSections?.map((item: any) => ({
          title: item.title,
          content: item.content,
        })) || [],

      imageSections:
        blog.contentImagesMeta?.map((item: any) => ({
          image: null, // files cannot be prefilled
          imageTitle: item.imageTitle,
          imageContent: item.imageDescription,
        })) || [],
    });

    // thumbnail preview
    if (blog.thumbnail) {
      setThumbnailPreview(blog.thumbnail);
    }

    // image previews
    if (blog.contentImages?.length) {
      const previews: Record<number, string> = {};
      blog.contentImages.forEach((img: string, index: number) => {
        previews[index] = img;
      });
      setImagePreviews(previews);
    }
  }, [data, reset]);

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
  const tags = watch("tags");

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

  const [updateBlog, { isLoading }] = useUpdateBlogMutation();
  const onSubmit = async (data: BlogEditPageData) => {
    try {
      const formData = new FormData();

      // BASIC FIELDS
      formData.append("title", data.title);
      formData.append("authorName", data.author);
      formData.append("descriptions", data.description);
      formData.append("category", data.category);
      formData.append("status", data.status);

      data.tags.forEach((tag) => {
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

      const response = await updateBlog({ id, data: formData });
      console.log(response);
      if (response?.data?.message) {
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.error("CREATE BLOG FAILED:", error);
      toast.error("Failed to add blog");
    }
  };

  const breadLink = [
    {
      label: "Blog",
      href: "/admin/cms",
    },
    {
      label: "Update Blog Post",
    },
  ];

  return (
    <>
      <BreadCrumb breadLink={breadLink} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg mt-4"
      >
        <h1 className="text-3xl font-bold mb-8">Update Blog Post</h1>

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

            {/* TAGS */}
            <label
              htmlFor="tags"
              className="mb-1 block text-[#696E86] text-[12px]"
            >
              Tags *
            </label>
            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && tagInput.trim()) {
                  e.preventDefault();
                  setValue("tags", [...tags, tagInput.trim()]);
                  setTagInput("");
                }
              }}
              placeholder="Add tag and press Enter"
              className="w-full p-3 border rounded-lg"
            />

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className=" flex items-end justify-end">
              <button
                type="submit"
                className="bg-[#1F274B] hover:bg-[#1F274B]/90 cursor-pointer text-white px-4 py-2 rounded-[4px]"
              >
                {isLoading ? "Updating.." : "Update"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default BlogEditPage;
