import { regularRates, regularRateLists, specialPromos } from '../data';
import ServicePillItem from '@/components/services/ServicePillItem';

export default function Page() {
  return (
    <div className="flex flex-col gap-12 px-[7%] py-4">
      <h1>Our Services</h1>

      {/* <div className="grid grid-cols-2 gap-8"> */}
      <div className="flex justify-center gap-8">
        <div className="flex flex-col gap-4 rounded-3xl bg-otb-yellow p-8">
          <h2 className="text-center">Regular Rates</h2>

          <ul className="grid grid-cols-2 gap-4">
            {regularRates.map((item) => (
              <ServicePillItem
                key={item.title}
                title={item.title}
                price={item.price}
              />
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-4 uppercase">
            {regularRateLists.map((list) => (
              <div
                key={list.title}
                className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-white p-8"
              >
                <span className="block text-xl font-bold uppercase">
                  {list.title}
                </span>

                <ul className="flex flex-col items-center">
                  {list.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}

                  {list.price && (
                    <li className="font-semibold italic">{list.price}</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl bg-otb-yellow p-8">
          <h2 className="text-center">Special Promos</h2>

          <ul className="flex flex-col gap-4">
            {specialPromos.map((promo) => (
              <ServicePillItem key={promo.title} {...promo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
