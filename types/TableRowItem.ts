<<<<<<< HEAD
import { TableItem } from '@/components/reusable/Features/reuseable-table';
=======
import { TableItem } from "@/components/reusable/Features/reuseable-table";
>>>>>>> c29307935a71bcf8f54a41be72a0fe32e7f6232d
import { StaticImageData } from "next/image";

export interface TableRowItem extends TableItem {
  name?: string;
  service?: string;
  price?: string;
  deliveryTime?: string;
  status?: string;
  profileImage?: StaticImageData; // StaticImageData for the profile image
  serviceImage?: StaticImageData; // StaticImageData for the service image
  serviceType?: string;
  date?: string;
  daysLeft?: string;
  orderId?: string;
  amount?: string;
  type?: string;
  invoice?: string;
  orderWith?: string;
  artist?: string;
  musician?: string;
  role?: string;
  commission?: string;
  method?: string;
  requestId?: string;
  picture?: StaticImageData;
  email?: string;
  lastLogin?: string;
  ip?: string;
  country?: string;
  device?: string;
  os?: string;
  description?: string;
  permissions?: string[];
  contact?: string;
  balance?: number;
  accountType?: string;
  rate?: string;
  account?: string;
  issueDate?: string;
  dueDate?: string;
  totalAmount?: string;
  sku?: string;
  salePrice?: string;
  purchasePrice?: string;
  tax?: string;
  category?: string;
  unit?: string;
  quantity?: string;
  color?: string;
  purchaseDate?: string;
  warehouse?: string;
  taxRate?: string;
  subject?: string;
  stage?: string;
  tasks?: string;
  followUpDate?: string;
  planName?: string;
  paymentType?: string;
  coupon?: string;
  ticketId?: string;
  assignedTo?: string;
  createdBy?: string;
  created?: string;
<<<<<<< HEAD
  action?: string;
=======
>>>>>>> c29307935a71bcf8f54a41be72a0fe32e7f6232d
  code?: string;
  discount?: number;
  limit?: number;
  limitPerUse?: number;
  used?: number;
<<<<<<< HEAD
=======
  phone?: string;
  state?: string;
  action?: React.ReactNode;
  experience?: string;
>>>>>>> c29307935a71bcf8f54a41be72a0fe32e7f6232d
  attachment?: string;
  companyName?: string;
  workspaceName?: string;
  customDomain?: string;
}
