import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <section id="contact" className="w-full py-20 flex flex-col items-center bg-black">
      <h2 className="text-white text-5xl font-semibold mb-10">Contact Me</h2>

      <div className="w-full max-w-5xl bg-[#111827] text-white border border-white/20 rounded-xl px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="size-7" />
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-sm">sharmachirag242004@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="size-7" />
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-sm">+91 9636388007</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPin className="size-7" />
            <div>
              <h4 className="font-semibold text-lg">Location</h4>
              <p className="text-sm">Udaipur, Rajasthan</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
