"use client";
import React, { useState } from "react";
import BreadCrumb from "../../reusable/BreadCrumb";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PlusIcon from "@/components/Icons/AdminIcon/PlusIcon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryTable from "./CategoryTable";
import SubCategoryTable from "./SubCategoryTable";
import AddCategoryForm from "./AddCategoryForm";
import AddSubCategoryForm from "./AddSubCategoryForm";

export default function ManageCategory() {
  const breadLink = [
    {
      label: "Products Management",
      href: "/admin/products",
    },
    {
      label: "Manage Category",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("category");

  return (
    <>
      {/* Header */}
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <BreadCrumb breadLink={breadLink} />
        <Dialog>
          <DialogTrigger className="cursor-pointer bg-primary-bg text-white rounded py-2.5 px-3 gap-2 flex items-center whitespace-nowrap">
            <PlusIcon className="h-4 w-4" />
            <span>Create Category</span>
          </DialogTrigger>
          <DialogContent style={{ maxWidth: "600px", width: "96%" }}>
            <h2 className="text-xl font-extrabold">
              Create {selectedTab === "category" ? "Category" : "Sub Category"}
            </h2>
            <hr />
            <Tabs
              defaultValue="category"
              value={selectedTab}
              onValueChange={setSelectedTab}
            >
              <TabsList className="mb-4 p-0 h-auto w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <TabsTrigger
                  value="category"
                  className="px-5 !py-3 outline-none shadow-none text-sm sm:text-base data-[state=active]:font-extrabold bg-[#ECEFF3] cursor-pointer focus-visible:ring-0 data-[state=active]:shadow-none data-[state=active]:bg-dark-bg data-[state=active]:text-white rounded-none rounded-tl-lg rounded-bl-lg"
                >
                  Main Category
                </TabsTrigger>
                <TabsTrigger
                  value="sub-category"
                  className="px-5 !py-3 outline-none shadow-none text-sm sm:text-base data-[state=active]:font-extrabold bg-[#ECEFF3] cursor-pointer focus-visible:ring-0 data-[state=active]:shadow-none data-[state=active]:bg-dark-bg data-[state=active]:text-white rounded-none rounded-tr-lg rounded-br-lg"
                >
                  Sub Category
                </TabsTrigger>
              </TabsList>
              <TabsContent value="category">
                <AddCategoryForm />
              </TabsContent>
              <TabsContent value="sub-category">
                <AddSubCategoryForm />
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
      {/* Categories Table */}
      <div className="mt-5 bg-white rounded-lg pt-4">
        <Tabs defaultValue="category">
          <TabsList className="p-0 mx-4 h-auto max-w-[250px] sm:max-w-[300px] w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <TabsTrigger
              value="category"
              className="px-5 !py-3 outline-none shadow-none text-sm sm:text-base data-[state=active]:font-extrabold bg-[#ECEFF3] cursor-pointer focus-visible:ring-0 data-[state=active]:shadow-none data-[state=active]:bg-dark-bg data-[state=active]:text-white rounded-none rounded-tl-lg rounded-bl-lg"
            >
              Main Category
            </TabsTrigger>
            <TabsTrigger
              value="sub-category"
              className="px-5 !py-3 outline-none shadow-none text-sm sm:text-base data-[state=active]:font-extrabold bg-[#ECEFF3] cursor-pointer focus-visible:ring-0 data-[state=active]:shadow-none data-[state=active]:bg-dark-bg data-[state=active]:text-white rounded-none rounded-tr-lg rounded-br-lg"
            >
              Sub Category
            </TabsTrigger>
          </TabsList>
          <TabsContent value="category">
            <CategoryTable />
          </TabsContent>
          <TabsContent value="sub-category">
            <SubCategoryTable />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
