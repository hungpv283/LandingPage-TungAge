
const ContactForm = () => {
  return (
    <>
      <section className=" dark:bg-gray-900 px-4 w-[80%] mx-auto">
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Fullname</label>
            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Full Name" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Email" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your Message</label>
            <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Your Message" required></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline transform transition-transform 
              duration-300 hover:scale-105 rounded-full">Send message</button>
        </form>
      </section>
    </>
  )
}

export default ContactForm