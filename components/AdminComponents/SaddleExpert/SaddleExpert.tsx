

'use client';

import PaginationComponent from '@/components/reusable/Features/PaginationComponent';
import ReuseAbleTable from '@/components/reusable/Features/reuseable-table';
import { useDebounce } from '@/src/hooks/useDebounce';
import { useDeleteTrySaddleMutation, useGetTrySaddlesQuery } from '@/src/redux/client/try-shaddle/tryShaddleApi';

import { format } from 'date-fns';
import { Search, Trash2, Eye } from 'lucide-react';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { toast } from 'sonner';

export default function SaddleExpert() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useGetTrySaddlesQuery({
    search: debouncedSearch,
    page: currentPage,
    limit: 10,
  });

  const [deleteSaddle] = useDeleteTrySaddleMutation();

  const relevantData = data?.data || [];
  const meta = data?.meta;

  const handleDelete = async (id: string) => {
    try {
      await deleteSaddle(id).unwrap();
      toast.success('Saddle request deleted successfully');
    } catch (error) {
      toast.error('Failed to delete request');
    }
  };

  const tableHeader = [
    'Customer',
    'Email',
    'Discipline',
    'Location',
    'Created Date',
    'Actions',
  ];

  const tableRowDataRenderers: ((item: any, index: number) => ReactNode)[] = [
    item => (
      <span className="text-[14px] text-[#1F274B] font-medium">{`${item.first_name} ${item.last_name}`}</span>
    ),
    item => <span className="text-[14px] text-[#1F274B]">{item.email}</span>,
    item => (
      <span className="text-[14px] text-[#1F274B]">{item.discipline}</span>
    ),
    item => (
      <span className="text-[14px] text-[#1F274B]">{`${item.city}, ${item.state}`}</span>
    ),
    item => (
      <span className="text-[14px] text-[#1F274B]">
        {item.created_at
          ? format(new Date(item.created_at), 'MMM d, yyyy')
          : 'N/A'}
      </span>
    ),
    item => (
      <div className="flex items-center justify-end gap-2">
        <Link
          href={`/admin/saddle-expert/${item.id}`} 
          className="p-2 hover:bg-gray-100 rounded-md text-blue-600 cursor-pointer"
        >
          <Eye size={18} />
        </Link>
        <button
          onClick={() => handleDelete(item.id)}
          className="p-2 hover:bg-red-50 rounded-md text-red-600 cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
      </div>
    ),
  ];

  return (
    <div className="p-4 rounded-[8px] bg-white border border-[#DFE1E7]">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2.5 mb-[23px]">
        <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B]">
          Saddle Expert Requests
        </h2>
        {/* <div className="relative">
          <input
            type="text"
            value={search}
            className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 border"
            placeholder="Search customer..."
            onChange={e => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div> */}
      </div>

      <ReuseAbleTable
        isLoadings={isLoading}
        currentItems={relevantData}
        tableHeader={tableHeader}
        tableRowDataRenderers={tableRowDataRenderers}
      />

      <div className="flex justify-center pt-8">
        <PaginationComponent
          currentPage={meta?.page || 1}
          totalPages={meta?.totalPage || 1}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}