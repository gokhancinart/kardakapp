"use client"
import React from 'react'
import { useTranslation } from 'next-i18next';
import { MdFingerprint } from "react-icons/md";
import { CiCoffeeCup, CiDeliveryTruck } from "react-icons/ci";
import { IoDocumentsOutline } from "react-icons/io5";

function HomeAbout() {
  const { t } = useTranslation('common')
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue">Kardak</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {t('home_about_title')}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('home_about_description')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-soft_primary">
                  <IoDocumentsOutline aria-hidden="true" className="h-6 w-6 text-blue" />
                </div>
                {t('home_about_step1_title')}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{t('home_about_step1_description')}</dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-soft_primary">
                  <MdFingerprint aria-hidden="true" className="h-6 w-6 text-blue" />
                </div>
                {t('home_about_step2_title')}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{t('home_about_step2_description')}</dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-soft_primary">
                  <CiCoffeeCup aria-hidden="true" className="h-6 w-6 text-blue" />
                </div>
                {t('home_about_step3_title')}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{t('home_about_step3_description')}</dd>
            </div>
            
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-soft_primary">
                  <CiDeliveryTruck aria-hidden="true" className="h-6 w-6 text-blue" />
                </div>
                {t('home_about_step4_title')}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{t('home_about_step4_description')}</dd>
            </div>
            
          </dl>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout