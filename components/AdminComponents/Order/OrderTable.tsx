'use client';

import { useState } from 'react';
import {
  useUpdateOrderStatusMutation,
  AdminOrderApi,
} from '@/src/redux/admin/order/adminOrderApi';

import PaginationComponent from '@/components/reusable/Features/PaginationComponent';
import { Search } from 'lucide-react';
import { ReactNode } from 'react';
import Link from 'next/link';
import EyeIcon from '@/components/Icons/AdminIcon/EyeIcon';
import EditIcon from '@/components/Icons/AdminIcon/EditIcon';
import { useFilterPagination } from '@/hooks/useFilterHook';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import ReuseAbleTable from '@/components/reusable/Features/ReuseableTable';

interface OrderTableProps {
  orders: AdminOrderApi[];
  handleUpdateStatus: (orderId: string, status: string) => Promise<void>;
  isLoading: boolean;
  error: any;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  statusFilter: string;
  setStatusFilter: (val: string) => void;
}

export default function OrderTable({
  orders,
  isLoading,
  error,
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}: OrderTableProps) {
  // REMOVED: useGetAdminOrdersQuery call from here.
  // We use the 'orders' prop which is already filtered by the parent.

  const [updateOrderStatus, { isLoading: isUpdating }] =
    useUpdateOrderStatusMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<AdminOrderApi | null>(
    null,
  );
  const [newStatus, setNewStatus] = useState<string>('');

  const handleOpenModal = (order: AdminOrderApi) => {
    setSelectedOrder(order);
    setNewStatus(order.status);
    setIsModalOpen(true);
  };

  const handleLocalUpdateStatus = async () => {
    if (!selectedOrder) return;
    try {
      await updateOrderStatus({
        id: selectedOrder.id,
        status: newStatus,
      }).unwrap();
      toast.success('Order status updated successfully');
      setIsModalOpen(false);
    } catch (error) {
      toast.error('Failed to update order status');
    }
  };

  // Pagination based on the 'orders' prop passed from parent
  const { currentItems, currentPage, totalPages, setCurrentPage } =
    useFilterPagination(orders || [], 6);

  const tableHeader = [
    'Order ID',
    'Product Name',
    'Customer',
    'Total Price',
    'Order Type',
    'Delivery Date',
    'Delivery Status',
    'Actions',
  ];

  const tableRowDataRenderers: ((
    item: AdminOrderApi,
    index: number,
  ) => ReactNode)[] = [
    item => (
      <span className="text-[14px] text-[#4A4C56] font-medium">
        {item?.orderNumber}
      </span>
    ),
    item => (
      <span className="text-[14px] text-[#1F274B] leading-[100%]">
        {item?.items[0]?.itemName || 'No Items'} <br />
        {item?.items.length > 1 && (
          <span className="text-[12px] leading-[100%] text-[#696E86]">
            + {item.items.length - 1} more items
          </span>
        )}
      </span>
    ),
    item => (
      <span className="text-[14px] text-[#1F274B] leading-[114%]">
        {item?.address?.firstName} {item?.address?.lastName} <br />
        <span className="text-[12px] text-[#696E86]">
          {item?.address?.email}
        </span>
      </span>
    ),
    item => (
      <span className="text-[14px] text-[#14191F] font-bold">
        {item?.currency} {item?.total.toFixed(2)}
      </span>
    ),
    item => <span className="text-[14px] text-[#14191F]">Online</span>,
    item => (
      <span className="text-[14px] text-[#1F274B]">
        {new Date(item?.createdAt).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
      </span>
    ),
    item => {
      const status = item?.status;
      let config = { bg: 'bg-[#E6EEFF]', text: 'text-[#1F3BB3]' };
      if (status === 'DELIVERED')
        config = { bg: 'bg-[#E9FAF5]', text: 'text-[#20C997]' };
      if (status === 'INPROCESS')
        config = { bg: 'bg-[#FFFAE8]', text: 'text-[#FFA600]' };
      if (status === 'CANCEL')
        config = { bg: 'bg-[#FFECEC]', text: 'text-[#D32F2F]' };

      return (
        <span
          className={`px-3 py-1 rounded-[6px] text-[14px] font-medium ${config.bg} ${config.text}`}
        >
          {status}
        </span>
      );
    },
    item => (
      <div className="flex justify-end gap-2">
        <Link
          href={`/admin/orders/${item?.id}`}
          className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px] hover:bg-gray-200"
        >
          <EyeIcon />
        </Link>
        <button
          onClick={() => handleOpenModal(item)}
          className="cursor-pointer bg-[#F8FAFB] rounded-[6px] p-[7px] hover:bg-gray-200"
        >
          <EditIcon />
        </button>
      </div>
    ),
  ];

  if (error)
    return <div className="p-4 text-red-500">Error loading orders.</div>;

  return (
    <div className="overflow-auto">
      <div className="p-4 rounded-[8px] bg-[#FFF] border border-[#DFE1E7]">
        <div className="flex flex-col justify-between md:flex-row flex-wrap md:items-center gap-2.5 mb-[23px]">
          <h2 className="md:text-xl text-lg font-extrabold text-[#1F274B]">
            Recent Orders
          </h2>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full md:w-[300px] rounded-[6px] border-[#DFE1E7] pl-10 pr-4 py-2 border"
                placeholder="Search order ID..."
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <Select
              value={statusFilter || 'ALL'}
              onValueChange={val => setStatusFilter(val === 'ALL' ? '' : val)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Status</SelectItem>
                <SelectItem value="PENDING">PENDING</SelectItem>
                <SelectItem value="INPROCESS">IN PROCESS</SelectItem>
                <SelectItem value="DELIVERED">DELIVERED</SelectItem>
                <SelectItem value="CANCEL">CANCEL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <ReuseAbleTable
            allClientDataList={orders}
            isLoadings={isLoading}
            currentItems={currentItems}
            tableHeader={tableHeader}
            tableRowDataRenderers={tableRowDataRenderers}
            isBg={false}
          />
        </div>

        {/* Pagination Logic */}
        {!isLoading && orders.length > 6 && (
          <div className="flex justify-center pt-8 pb-4">
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      {/* --- STATUS UPDATE MODAL --- */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-[#1F274B]">
              Update Order Status
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                Updating status for Order:{' '}
                <span className="font-bold text-[#1F274B]">
                  #{selectedOrder?.orderNumber}
                </span>
              </p>
              <Select value={newStatus} onValueChange={setNewStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PENDING">PENDING</SelectItem>
                  <SelectItem value="INPROCESS">IN PROCESS</SelectItem>
                  <SelectItem value="DELIVERED">DELIVERED</SelectItem>
                  <SelectItem value="CANCEL">CANCEL</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              className="border-[#DFE1E7]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleLocalUpdateStatus}
              disabled={isUpdating}
              className="bg-[#1F274B] hover:bg-[#2a3563]"
            >
              {isUpdating ? 'Updating...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
