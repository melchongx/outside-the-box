'use client';

import QrCode from '@/components/reservation/QrCode';
import Link from 'next/link';
import styles from '@/styles/services.module.css';

import { useState } from 'react';

export default function Page() {
  const [isPaid, setIsPaid] = useState<boolean>(false);

  return (
    <div className="mx-auto flex min-h-[85dvh] max-w-7xl items-center justify-center">
      <div className="mx-auto flex min-w-[464px] flex-col gap-8 rounded-3xl bg-otb-yellow p-16 pb-12 shadow-2xl">
        <h2 className="text-center">Seat Reservation</h2>

        {!isPaid ? (
          <>
            <div className="flex gap-8">
              <QrCode provider={'Gcash'} />
              <QrCode provider={'Maya'} />
              <QrCode provider={'BPI'} />
            </div>

            <div className="mt-3 flex flex-col items-center gap-2">
              <p>
                Press &ldquo;Continue&rdquo; once you have finished your payment
              </p>

              <div className="flex w-full justify-center gap-8">
                <button
                  className="basis-1/3 rounded-md bg-otb-blue px-2 py-1"
                  onClick={() => setIsPaid(true)}
                >
                  Continue
                </button>
                <Link
                  href={'/services'}
                  className="basis-1/3 rounded-md bg-otb-blue px-2 py-1 text-center"
                >
                  Cancel
                </Link>
              </div>

              <p>
                By continuing, you agree to our{' '}
                <Link href={'#'} className="text-otb-blue underline">
                  Terms and Conditions
                </Link>
                .
              </p>
            </div>
          </>
        ) : (
          <>
            <div
              className={`w-full rounded-3xl bg-white p-12 pt-8 ${styles.blueShadow}`}
            >
              <p className="mb-4 text-center font-bold">Reservation Success!</p>

              <p>Reminders for scheduling a reservation:</p>
              <ul className="text-sm">
                <li className={styles.listItem}>Show up on time</li>
                <li className={styles.listItem}>Be mindful of other guests</li>
                <li className={styles.listItem}>Observe our house rules</li>
              </ul>
            </div>

            <Link
              href="/"
              className="mx-auto max-w-[125px] rounded-md bg-otb-blue px-5 py-2 text-center"
            >
              Go Back
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
