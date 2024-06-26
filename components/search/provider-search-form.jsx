function ProviderSearchForm(props) {
  return (

    <section id="provider-search-form" className="site-container flex flex-col items-stretch">
      <div className="bg-sky-100 flex w-full justify-between md:gap-5 p-8 max-md:max-w-full max-md:flex-wrap">

<form
            className="flex flex-col w-full md:space-x-12 mx-auto md:flex-row md:mx-0 justify-between items-stretch"
>
              <input
                type="text"
                className="flex-1 border-1 bg-white border-white w-full md:w-2/3 pt-3 pb-2 focus:outline-none md:mr-3 md:mb-0 placeholder:px-4"
                placeholder={props.placeholdeText || "Search by Doctor, Condition or Specialty..."}
              />

              <input
                type="submit"
                className="rounded-lg bg-tertiaryAccent text-white text-base py-2 px-4"
                value={props.buttonLabel || "Search Doctors"}
              />
          </form>
      </div>
    </section>
  );
}

export default ProviderSearchForm;