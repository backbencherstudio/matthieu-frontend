'use client';

import HandShakeIcon from '@/components/Icons/HandhsakeIcon';
import MapMarker from '@/components/Icons/MapMarker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useGetCompetitionsQuery } from '@/src/redux/client/competition/competitionApi';
import { useGetExpertByCountryQuery } from '@/src/redux/client/expert/expertApi';
import jsPDF from 'jspdf';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Country, State } from 'country-state-city';

interface CountryOption {
  label: string;
  value: string;
  isoCode: string;
}

interface StateOption {
  label: string;
  value: string;
  isoCode: string;
}

interface ExpertItem {
  name: string;
  email: string;
  phone: string;
  region: string;
}

const normalizeText = (value?: string) => (value || '').trim().toLowerCase();

export default function FindUs() {
  const [showResult, setShowResult] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCountryIso, setSelectedCountryIso] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('');

  const countries: CountryOption[] = useMemo(
    () =>
      Country.getAllCountries().map(country => {
        let backendValue = country.name.toLowerCase();

        if (country.isoCode === 'US') backendValue = 'usa';

        return {
          label: country.name,
          value: backendValue,
          isoCode: country.isoCode,
        };
      }),
    [],
  );

  const usaStates: StateOption[] = useMemo(() => {
    if (selectedCountryIso !== 'US') return [];

    return State.getStatesOfCountry('US').map(state => ({
      label: state.name,
      value: state.name,
      isoCode: state.isoCode,
    }));
  }, [selectedCountryIso]);

  const isUSASelected = selectedCountryIso === 'US';

  const { data } = useGetExpertByCountryQuery(selectedCountry, {
    skip: !selectedCountry,
  });

  const { data: competitionsData } = useGetCompetitionsQuery({
    location: selectedLocation,
    discipline: selectedDiscipline,
  });

  const uniqueDiscipline = Array.from(
    new Set(
      competitionsData?.data
        ?.map((item: { discipline?: string }) => item?.discipline)
        .filter(Boolean),
    ),
  ) as string[];

  const uniqueLocations = Array.from(
    new Set(
      competitionsData?.data
        ?.map((item: { location?: string }) => item?.location)
        .filter(Boolean),
    ),
  ) as string[];

  const filteredExperts = useMemo(() => {
    const experts: ExpertItem[] = data?.data ?? [];

    if (isUSASelected && selectedState) {
      return experts.filter(
        expert => normalizeText(expert.region) === normalizeText(selectedState),
      );
    }

    return experts;
  }, [data?.data, isUSASelected, selectedState]);

  const handleSearch = () => {
    setShowResult(true);
  };

  const handleCountryChange = (value: string) => {
    const selected = countries.find(country => country.value === value);

    setSelectedCountry(value);
    setSelectedCountryIso(selected?.isoCode || '');
    setSelectedState('');
    setShowResult(false);
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    setShowResult(false);
  };

  const handleDownloadPDF = (expert: ExpertItem) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Business Card', 20, 20);

    doc.setFontSize(14);
    doc.text(`Name: ${expert.name}`, 20, 40);
    doc.text(`Company: Arion Saddlery`, 20, 50);
    doc.text(`Region: ${expert.region}`, 20, 60);
    doc.text(`Phone: ${expert.phone}`, 20, 70);
    doc.text(`Email: ${expert.email}`, 20, 80);

    doc.save(`${expert.name.replace(/\s+/g, '_')}_Business_Card.pdf`);
  };

  return (
    <div>
      <div className="maxContainer">
        <div>
          <Image
            src="/images/find-us-hero.png"
            alt="find-us-hero"
            width={1000}
            height={1000}
            unoptimized
            className="w-full h-[200px] md:h-auto object-cover object-top"
          />
        </div>

        <div className="pt-10 xl:pt-16 pb-16 xl:pb-30">
          <div className="max-w-[985px] w-full mx-auto">
            <div className="grid md:grid-cols-[48%_4%_48%] items-center gap-12 md:gap-0">
              <div className="order-2 md:order-1">
                <div className="md:p-6 flex flex-col items-center md:max-w-[350px] max-w-[450px] w-full mx-auto">
                  <HandShakeIcon className="w-[64px] h-[64px] text-[#1F274B]" />
                  <h1 className="mt-4 mb-8 uppercase font-extrabold text-2xl lg:text-[32px] text-center text-primary-text leading-[124%]">
                    Find an expert <br /> near you
                  </h1>

                  <div className="grid grid-cols-2 items-center w-full mb-6">
                    <p className="text-lg">Country</p>
                    <div className="flex justify-end">
                      <Select
                        value={selectedCountry || undefined}
                        onValueChange={handleCountryChange}
                      >
                        <SelectTrigger className="find-us-custom-select">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>

                        <SelectContent className="bg-[#F4F5F7] rounded-none">
                          {countries.map(country => (
                            <SelectItem
                              key={country.isoCode}
                              value={country.value}
                              className="data-[state=checked]:bg-select-active-bg data-[state=checked]:text-white rounded-none"
                            >
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {isUSASelected && (
                    <div className="grid grid-cols-2 items-center w-full mb-6">
                      <p className="text-lg">State</p>
                      <div className="flex justify-end">
                        <Select
                          value={selectedState || undefined}
                          onValueChange={handleStateChange}
                        >
                          <SelectTrigger className="find-us-custom-select">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>

                          <SelectContent className="bg-[#F4F5F7] rounded-none">
                            {usaStates.map(state => (
                              <SelectItem
                                key={state.isoCode}
                                value={state.value}
                                className="data-[state=checked]:bg-select-active-bg data-[state=checked]:text-white rounded-none"
                              >
                                {state.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleSearch}
                    className="find-us-button flex items-center justify-center"
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="bgPrimary h-[90%] w-[3px] mx-auto hidden md:block order-3 md:order-2"></div>

              <div className="md:p-6 flex flex-col items-center md:max-w-[350px] max-w-[450px] w-full mx-auto order-1 md:order-3">
                <MapMarker className="h-16 w-16" />
                <h1 className="mt-4 mb-8 uppercase font-extrabold text-2xl lg:text-[32px] text-center text-primary-text leading-[124%]">
                  FIND US AT <br /> COMPETITIONS
                </h1>

                <div className="grid grid-cols-2 items-center gap-4 justify-between w-full mb-6">
                  <p className="text-lg">DISCIPLINE</p>
                  <div className="flex justify-end">
                    <Select
                      onValueChange={value => setSelectedDiscipline(value)}
                    >
                      <SelectTrigger className="find-us-custom-select">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#F4F5F7] rounded-none">
                        {uniqueDiscipline.map((item, idx) => (
                          <SelectItem
                            key={idx}
                            value={item}
                            className="data-[state=checked]:bg-select-active-bg data-[state=checked]:text-white rounded-none"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-4 justify-between w-full mb-6">
                  <p className="text-lg">COUNTRY</p>
                  <div className="flex justify-end">
                    <Select onValueChange={value => setSelectedLocation(value)}>
                      <SelectTrigger className="find-us-custom-select">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>

                      <SelectContent className="bg-[#F4F5F7] rounded-none">
                        {uniqueLocations?.map(country => (
                          <SelectItem
                            key={country}
                            value={country}
                            className="data-[state=checked]:bg-select-active-bg data-[state=checked]:text-white rounded-none"
                          >
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Link
                  href={'/find-us/calendar'}
                  className="find-us-button flex items-center justify-center"
                >
                  Calendar
                </Link>
              </div>
            </div>
          </div>

          {showResult && filteredExperts.length === 0 && (
            <div className="flex justify-center mt-10">
              <p className="text-base text-secondary-text">
                No expert found for the selected country/state.
              </p>
            </div>
          )}

          {showResult && filteredExperts.length > 0 && (
            <div className="flex flex-col justify-center items-center gap-12">
              <div className="flex flex-col items-center mt-10 w-full gap-6">
                {filteredExperts.map((expert, index) => (
                  <div
                    key={`${expert.email}-${index}`}
                    className="p-6 flex md:flex-row flex-col gap-8 w-full md:w-auto h-full items-center mx-auto border rounded-lg"
                  >
                    <div className="flex md:justify-center">
                      <Image
                        src="/matheiu-logo.png"
                        alt="matheiu-logo"
                        width={500}
                        height={500}
                        unoptimized
                        className="w-[270px]"
                      />
                    </div>
                    <div className="bgPrimary self-stretch w-[1px] hidden md:block"></div>
                    <div className="flex flex-col gap-4">
                      <div className="text-center space-y-1.5">
                        <h2 className="text-2xl font-extrabold uppercase text-primary-text">
                          {expert.name}
                        </h2>
                        <p className="text-base text-secondary-text">
                          Region : {expert.region}
                        </p>
                        <p className="text-base text-secondary-text">
                          {expert.phone}
                        </p>
                        <p className="text-base text-secondary-text">
                          {expert.email}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDownloadPDF(expert)}
                        className="find-us-button block mx-auto"
                      >
                        Save Business Card
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Link
                  href="/saddles/saddlery-expert"
                  className="px-8 py-4 bg-[#1F274B] text-[#FFF] cursor-pointer"
                >
                  TRY A SADDLE
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
