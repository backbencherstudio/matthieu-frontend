'use client';

import { useParams, useRouter } from 'next/navigation';

import { format } from 'date-fns';
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Award,
} from 'lucide-react';
import { useGetSpecificTrySaddleQuery } from '@/src/redux/client/try-shaddle/tryShaddleApi';

export default function SaddleExpertDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { data, isLoading, error } = useGetSpecificTrySaddleQuery(id as string);

  const detail = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1f274b]"></div>
      </div>
    );
  }

  if (error || !detail) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-red-600">Request not found</h2>
        <button
          onClick={() => router.back()}
          className="mt-4 text-blue-600 underline cursor-pointer"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => router.back()}
          className="p-3 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <ArrowLeft className="text-[#1F274B]" size={24} />
        </button>
        <div>
          <h1 className="text-2xl font-extrabold text-[#1F274B]">
           Try Saddle Experts Details
          </h1>
          <p className="text-sm text-gray-500">
            Submitted on {format(new Date(detail.created_at), 'PPP p')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Information Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-[#DFE1E7] shadow-sm">
            <h3 className="text-lg font-bold text-[#1F274B] mb-4 flex items-center gap-2">
              <User size={20} className="text-blue-500" /> Customer Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  First Name
                </p>
                <p className="text-[#1F274B] font-medium">
                  {detail.first_name}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Last Name
                </p>
                <p className="text-[#1F274B] font-medium">{detail.last_name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider flex items-center gap-1">
                  <Mail size={12} /> Email Address
                </p>
                <p className="text-[#1F274B] font-medium">{detail.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider flex items-center gap-1">
                  <Phone size={12} /> Phone Number
                </p>
                <p className="text-[#1F274B] font-medium">
                  {detail.phone || 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 rounded-xl border border-[#DFE1E7] shadow-sm">
            <h3 className="text-lg font-bold text-[#1F274B] mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-red-500" /> Shipping / Contact
              Address
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Street Address
                </p>
                <p className="text-[#1F274B] font-medium">{detail.address}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                    City
                  </p>
                  <p className="text-[#1F274B] font-medium">{detail.city}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                    State
                  </p>
                  <p className="text-[#1F274B] font-medium">{detail.state}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                    Zip Code
                  </p>
                  <p className="text-[#1F274B] font-medium">
                    {detail.zip_code}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                    Country
                  </p>
                  <p className="text-[#1F274B] font-medium">{detail.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences & Message Side Card */}
        <div className="space-y-6">
          <div className="bg-[#F8FAFB] p-6 rounded-xl border border-[#DFE1E7]">
            <h3 className="text-lg font-bold text-[#1F274B] mb-4 flex items-center gap-2">
              <Award size={20} className="text-yellow-600" /> Discipline
            </h3>
            <div className="flex flex-wrap gap-2">
              {detail.discipline.split(',').map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-[#1F274B]"
                >
                  {item.trim()}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#DFE1E7] shadow-sm">
            <h3 className="text-lg font-bold text-[#1F274B] mb-4 flex items-center gap-2">
              <MessageSquare size={20} className="text-green-500" /> Message
            </h3>
            <p className="text-[#1F274B] text-sm leading-relaxed whitespace-pre-wrap italic">
              "{detail.message || 'No message provided.'}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
