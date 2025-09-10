'use client';

import Image from 'next/image';
import type { Promotion as PromotionModel } from '@/lib/api';

export default function PromotionCard({
  promotion,
}: {
  promotion: PromotionModel;
}) {
  return (
    <div className="rounded overflow-hidden bg-gray-100">
      <div className="relative w-full h-40 bg-gray-300">
        {promotion.avatar && (
          <Image fill src={promotion.avatar} alt="promotion avatar" />
        )}
      </div>
      <div className="w-14 h-14 absolute top-0 left-0 rounded-br-full bg-lime-200" />
      <div className="w-14 h-14 absolute inset-0 py-3 pr-3 pl-0.5 rounded-br-full bg-gray-900">
        <p className="text-center text-xs font-bold text-lime-200">{`–${promotion.discount}%`}</p>
      </div>

      <div className="flex flex-col p-5 gap-3">
        <div className="text-base font-semibold text-gray-900">
          {promotion.title}
        </div>
        <p className="text-sm text-gray-600">{promotion.description}</p>
        <div className="text-xs text-gray-500">{promotion.companyTitle}</div>
      </div>
    </div>
  );
}
