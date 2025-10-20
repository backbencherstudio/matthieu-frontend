import { TableItem } from "@/components/reusable/Features/reuseable-table";
import { StaticImageData } from "next/image";

export interface TableRowItem extends TableItem {
  name?: string;
  title?: string;
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
  usage?: string;
  validityStart?: string;
  validityEnd?: string;
  minAmount?: string;
  method?: string;
  requestId?: string;
  picture?: StaticImageData;
  email?: string;
<<<<<<< HEAD
=======
  publishDate?: string;
  tags?: string[];
  categories?: string[];
  typeValue?: string;
  deliveryFee?: string;
  author?: string;
  clicks?: number;
>>>>>>> 593e4ba9c143a0a72c0665fd0a5353dfabd3de83
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

  code?: string;
  discount?: number;
  limit?: number;
  limitPerUse?: number;
  used?: number;
  phone?: string;
  state?: string;
  action?: React.ReactNode;
  experience?: string;
  attachment?: string;
  companyName?: string;
  workspaceName?: string;
  customDomain?: string;
}
