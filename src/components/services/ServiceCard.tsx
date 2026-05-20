import { useNavigate } from "react-router-dom";

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ElementType;
};

function ServiceCard({
  title,
  description,
  price,
  duration,
  icon: Icon,
}: ServiceCardProps) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking", {
      state: {
        service: {
          title,
          description,
          price,
          duration,
        },
      },
    });
  };

  return (
    <div className="group rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Icon */}
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <Icon size={32} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-3xl font-semibold text-slate-900">{title}</h3>

      {/* Description */}
      <p className="mb-6 text-lg leading-relaxed text-slate-500">
        {description}
      </p>

      {/* Info */}
      <div className="mb-8 space-y-3">
        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
          <span className="text-lg text-slate-500">Dauer</span>

          <span className="text-lg font-semibold text-slate-900">
            {duration}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">
          <span className="text-lg text-slate-500">Preis</span>

          <span className="text-lg font-semibold text-blue-600">{price}</span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleBooking}
        className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        Jetzt buchen
      </button>
    </div>
  );
}

export default ServiceCard;
