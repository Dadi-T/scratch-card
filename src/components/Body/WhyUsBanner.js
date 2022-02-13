import StarBorderIcon from "@mui/icons-material/StarBorder";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
export default function WhyUsBanner() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3  h-full  ">
      <div className="lg:col-span-3 md:col-span-2 px-4  bg-background ">
        <h2 className="lg:text-6xl font-light md:text-5xl text-4xl lg:w-1/2 w-4/5  py-4">
          Why businesses turn to us
        </h2>
        <section className="lg:w-1/2 w-4/5 py-4 ">
          <h4 className="text-2xl pb-2 flex items-center">
            <StarBorderIcon /> Proof of quality
          </h4>
          <p>
            Check any pro's work samples,client reviews, and identity
            verification
          </p>
        </section>
        <section className="lg:w-1/2 w-4/5 py-4 ">
          <h4 className="text-2xl pb-2 sm:flex sm:items-center">
            <CreditCardOffIcon />
            No cost and Instant Contact
          </h4>
          <p>
            Contact potential seller for your product,negotitate price,
            shipping, and choose your payment method
          </p>
        </section>
        <section className="lg:w-1/2 w-4/5 py-4">
          <h4 className="text-2xl pb-2 flex items-center">
            <VerifiedUserIcon /> Safe and secure
          </h4>
          <p>
            Check any pro's work samples,client reviews, and identity
            verification
          </p>
        </section>
      </div>
      <div className="flex items-center bg-main p-4 h-[20vh] sm:h-full ">
        <h3 className="sm:text-4xl text-3xl text-[#FFFFFF]  ">
          We're morocco's best B2B marketplace
        </h3>
      </div>
    </div>
  );
}
