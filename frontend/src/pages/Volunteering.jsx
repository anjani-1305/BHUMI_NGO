import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function Example({ close }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [whatsapp_consent, setWhatsapp_consent] = useState(false);
  const [newsletter_consent, setNewsletter_consent] = useState(false);
  const [pincode, setPincode] = useState("");
  const [organization, setOrganization] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled
    if (
      fname &&
      lname &&
      mobile &&
      email &&
      location &&
      pincode &&
      organization
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [fname, lname, mobile, email, location, pincode, organization]);

  function handleSubmit(event) {
    event.preventDefault(); // Prevent page from refreshing

    const data = {
      first_name: fname,
      last_name: lname,
      mobile: mobile,
      email: email,
      dob: "1996-07-15",
      location: location,
      whatsapp_consent: whatsapp_consent,
      newsletter_consent: newsletter_consent,
      pincode: pincode,
      organization: organization,
    };

    axios
      .post("http://localhost:8000/volunteer/", data)
      .then(function (response) {
        console.log(response.data);
        setConfetti(true);
        setSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          setConfetti(false);
          close();
          setSuccess(false);
        }, 3000);
      });
  }

  return (
    <>
      {success ? (
        // Render the success message
        <div className="flex flex-col items-center justify-center min-h-screen w-128 bg-green-100 text-center overflow-hidden">
          {confetti && (
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          )}
          <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-800">
            Registration Successful!
          </h1>
          <p className="text-green-700 text-lg md:text-xl mt-4 mx-2">
            Thank you for your registration. Your willingness to volunteer will make a significant impact. We look forward to working with you!
          </p>
        </div>
      ) : (
        // Render the registration form
        <form className="m-5" onSubmit={handleSubmit}>
          <div className="space-y-12 z-50 m-3">
            {/* ... other form sections ... */}

            {/* Personal Information */}
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* First Name */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900 text-left"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Organization */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium leading-6 text-gray-900 text-left"
                  >
                    Organization
                  </label>
                  <div className="mt-2">
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setOrganization(e.target.value)}
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium leading-6 text-gray-900 text-left"
                  >
                    Mobile Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900 text-left"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>India</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                {/* Street Address */}
                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* City */}
                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                {/* State / Province */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* ZIP / Postal Code */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setPincode(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Notifications
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                We'll always let you know about important changes, but you pick what else you want to hear about.
              </p>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <div className="mt-6 space-y-6">
                    {/* Whatsapp Consent */}
                    <div className="relative flex gap-x-3 items-center">
                      <div className="flex h-6 items-center">
                        <input
                          id="whatsapp-consent"
                          name="whatsapp-consent"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={(e) => setWhatsapp_consent(e.target.checked)}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="whatsapp-consent"
                          className="font-medium text-gray-900"
                        >
                          Whatsapp
                        </label>
                      </div>
                    </div>

                    {/* Newsletter Consent */}
                    <div className="relative flex gap-x-3 items-center">
                      <div className="flex h-6 items-center">
                        <input
                          id="newsletter-consent"
                          name="newsletter-consent"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={(e) => setNewsletter_consent(e.target.checked)}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="newsletter-consent"
                          className="font-medium text-gray-900 ml-1"
                        >
                          Newslettenor
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={close}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium leading-5 text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                formValid ? "" : "cursor-not-allowed opacity-50"
              }`}
              disabled={!formValid}
            >
              Register
            </button>
          </div>
        </form>
      )}
    </>
  );
}
