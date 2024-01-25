import Image from 'next/image';

export default function QrCode({ provider }: { provider: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={'/qr-sample.svg'}
        alt={''}
        height={145}
        width={145}
        className="w-full max-w-[145px] rounded-md bg-white"
      />
      <span className="text-2zxl block font-bold">{provider}</span>
    </div>
  );
}
