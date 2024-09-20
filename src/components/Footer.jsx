/* eslint-disable react/prop-types */
import { EnvelopeSimple, LinkedinLogo, WhatsappLogo } from "phosphor-react";

const Footer = () => {
  return (
    <div className="flex justify-center space-x-4">
            <a href="mailto:esemje@live.com" target="_blank" rel="noopener noreferrer" className="bg-red-600 p-2 rounded-full hover:bg-red-500">
              <EnvelopeSimple size={26} weight="regular" className="text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600">
              <LinkedinLogo size={26} weight="regular" className="text-white" />
            </a>
            <a href="https://wa.me/+919376141100" target="_blank" rel="noopener noreferrer" className="bg-green-500 p-2 rounded-full hover:bg-green-400">
              <WhatsappLogo size={26} weight="regular" className="text-white" />
            </a>
          </div>
  );
};

export default Footer;
