import DentalNavbar from '@/components/dental/DentalNavbar';
import DentalHero from '@/components/dental/DentalHero';
import DentalServices from '@/components/dental/DentalServices';
import DentalDoctors from '@/components/dental/DentalDoctors';
import DentalReviews from '@/components/dental/DentalReviews';
import DentalContacts from '@/components/dental/DentalContacts';
import DentalFooter from '@/components/dental/DentalFooter';

const Dental = () => {
  return (
    <div className="min-h-screen" style={{ background: '#f8fafc', fontFamily: "'Inter', sans-serif" }}>
      <DentalNavbar />
      <DentalHero />
      <DentalServices />
      <DentalDoctors />
      <DentalReviews />
      <DentalContacts />
      <DentalFooter />
    </div>
  );
};

export default Dental;
