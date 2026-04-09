

'use client';

import BreadCrumb from '@/components/ClientComponents/reuseable/BreadCrumb';
import { useForm, Controller } from 'react-hook-form';
import { Country, State, City } from 'country-state-city';

import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { useCreateTrySaddleMutation } from '@/src/redux/client/try-shaddle/tryShaddleApi';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  saddle: string[];
  comments: string;
}

const SaddleryExpertPage = () => {
  const [createRequest, { isLoading }] = useCreateTrySaddleMutation();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const breadLink = [
    { label: 'SADDLES', href: '/saddles' },
    { label: 'Expert', href: '/saddles/saddlery-expert' },
  ];

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      saddle: [],
      comments: '',
    },
  });

  // Watch for changes to update selectors
  const watchCountry = watch('country');
  const watchState = watch('state');

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Find names from codes for the API payload
      const countryName =
        Country.getCountryByCode(data.country)?.name || data.country;
      const stateName =
        State.getStateByCodeAndCountry(data.state, data.country)?.name ||
        data.state;

      await createRequest({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        address: `${data.address1} ${data.address2}`.trim(),
        country: countryName,
        city: data.city,
        state: stateName,
        zip_code: data.zipCode,
        message: data.comments,
        discipline: data.saddle.join(', '),
      }).unwrap();

      toast.success('Form submitted successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to submit. Please try again.');
    }
  };

  return (
    <div>
      <BreadCrumb breadLink={breadLink} />
      <div className="my-8 maxContainer">
        <h4 className="text-[15px] textSecondary text-center leading-[1.8em] uppercase">
          SADDLE EXPERT
        </h4>
        <p className="text-lg lg:text-[50px] text-center text-wrap leading-[130%] text-[#1f274b] mt-3">
          Get in touch with our experts to create the saddle of your dreams.
        </p>

        <p className="text-sm lg:text-[16px] text-[#1f274b] text-center text-wrap normal-case leading-[100%] mt-7">
          Complete this form to be contacted by one of our experts!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              {...register('firstName', { required: true })}
              placeholder="First Name"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
            <input
              {...register('lastName', { required: true })}
              placeholder="Last Name"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
            <input
              {...register('phone')}
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              {...register('address1')}
              placeholder="Address 1"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
            <input
              {...register('address2')}
              placeholder="Address 2"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Country & State Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              {...register('country')}
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500 appearance-none cursor-pointer"
            >
              <option value="">Country</option>
              {Country.getAllCountries().map(item => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </select>

            <select
              {...register('state')}
              disabled={!watchCountry}
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500 appearance-none cursor-pointer disabled:opacity-50"
            >
              <option value="">State</option>
              {State.getStatesOfCountry(watchCountry).map(item => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              {...register('city')}
              disabled={!watchState}
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500 appearance-none cursor-pointer disabled:opacity-50"
            >
              <option value="">City</option>
              {City.getCitiesOfState(watchCountry, watchState).map(item => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>

            <input
              {...register('zipCode')}
              placeholder="Zip Code"
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500"
            />
          </div>

          <div>
            <p className="text-[#1f274b] font-semibold mb-3">Discipline</p>
            <div className="flex lg:gap-10 md:gap-6 gap-4 flex-wrap ">
              {[
                'HUNTER',
                'JUMPER',
                'EQUTATION',
                'DRESSAGE',
                'CROSS_COUNTRY',
                'OTHER',
              ].map(discipline => (
                <label
                  key={discipline}
                  className="flex items-center md:gap-3 gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    value={discipline}
                    {...register('saddle')}
                    className="w-4 h-4 accent-[#1f274b] cursor-pointer"
                  />
                  <span className="text-[#1f274b] md:text-base text-sm">
                    {discipline}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <textarea
              {...register('comments')}
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 bg-[#E5E5E5] text-gray-700 placeholder-gray-500 resize-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-[#1f274b] text-white font-semibold hover:bg-[#1f274b]/90 cursor-pointer disabled:bg-gray-400"
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SaddleryExpertPage;