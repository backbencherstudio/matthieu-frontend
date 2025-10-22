import BreadCrumb from "@/components/AdminComponents/reusable/BreadCrumb";
import RefreshIcon from "@/components/Icons/AdminIcon/RefreshIcon";

export default function OrderDetailPage() {
  const breadLink = [
    {
      label: "Orders Management",
      href: "/admin/orders",
    },
    {
      label: "Orders Detail",
    },
  ];
  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div>
        {/* Order Header */}
        <div className="mt-6 p-4 rounded-[8px] bg-[#FFF]">
          <div className="flex items-center justify-between mb-6">
            <h1 className="lg:text-xl text-lg font-extrabold text-[#1F274B] leading-[132%] tracking-[0.1px]">
              Order #A5-AB7D-8NS
            </h1>
            <button className="flex items-center gap-2 px-2.5 py-1.5 bg-[#FFFAE8] text-[#FFA600] text-[14px] leading-[100%] tracking-[0.07px]">
              <RefreshIcon className="w-4 h-4" />
              <span className="font-medium">In Process</span>
            </button>
          </div>

          {/* Order Items */}
          <div className="mt-[21px]">
            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12">
                <img
                  src="/orderManagement/omimage-2.png"
                  alt="Double Noseband Bridle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] font-extrabold text-[#4C526F] leading-[100%]">
                  Double Noseband Bridle
                </h3>
                <p className="text-[14px] text-[#4C526F] leading-[100%] mt-3">
                  SKU: BR7D2NS
                </p>
              </div>
              <div className="text-right">
                <p className="text-[14px] text-[#4C526F] font-extrabold leading-[100%]">
                  $260.00
                </p>
                <p className="text-[14px] text-[#4C526F] leading-[100%] mt-3">
                  Qty: 1
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 my-4">
              <div className="w-12 h-12">
                <img
                  src="/orderManagement/omimage-1.png"
                  alt="Double Noseband Bridle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] font-extrabold text-[#4C526F] leading-[100%]">
                  Hunter Jumper Saddle
                </h3>
                <p className="text-[14px] text-[#4C526F] leading-[100%] mt-3">
                  SKU: BR7D2NS
                </p>
              </div>
              <div className="text-right">
                <p className="text-[14px] text-[#4C526F] font-extrabold leading-[100%]">
                  $330.00
                </p>
                <p className="text-[14px] text-[#4C526F] leading-[100%] mt-3">
                  Qty: 1
                </p>
              </div>
            </div>
            <hr />
          </div>

          {/* Order Summary */}
          <div className="mt-6">
            <div className="flex justify-between text-[#4C526F] text-[14px]">
              <span>Subtotal</span>
              <span className="font-medium">$590.00</span>
            </div>
            <div className="flex justify-between text-[#4C526F] text-[14px] mt-5">
              <span>Shipping</span>
              <span className="font-medium">$15.00</span>
            </div>
            <div className="flex justify-between text-[#4C526F] text-[14px] mt-5 mb-4">
              <span>Tax (8%)</span>
              <span className="font-medium">$47.20</span>
            </div>
            <hr />
            <div className="flex justify-between mt-5 mb-4">
              <span className="font-extrabold text-[#4C526F] text-[14px] leading-[100%]">
                Total Amount
              </span>
              <span className="text-[14px] text-[#4C526F] leading-[100%]">
                $652.20
              </span>
            </div>
          </div>
        </div>

        {/* Customer & Shipping Info */}
        <div className="p-4 mt-5 rounded-[8px] bg-[#FFF] grid grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold leading-[132%] tracking-[0.1px]">
              Customer
            </h2>
            <div className="space-y-3 mt-5">
              <p className="font-extrabold text-[#777980] text-[14px] leading-[100%]">
                Marcus Thompson
              </p>
              <p className="text-[#777980] text-[14px] leading-[100%]">
                marcus@ukclub.com
              </p>
              <p className="text-[#777980] text-[14px] leading-[100%]">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-extrabold leading-[132%] tracking-[0.1px]">
              Shipping Address
            </h2>
            <div className="space-y-3 mt-5">
              <p className="font-extrabold text-[#777980] text-[14px] leading-[100%]">
                Tracking Number: 1Z999AA1234S67890
              </p>
              <p className="text-[#777980] text-[14px] leading-[100%]">
                123 Equestrian Lane Wellington, FL 33414 United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
