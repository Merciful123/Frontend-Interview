const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 mt-4">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          
          <div>
            <h2 className="text-lg font-bold">
              CA<span className="text-primary"> Monk</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Complete guidance for CA Foundation, Intermediate & Final.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Courses</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>CA Foundation</li>
              <li>CA Intermediate</li>
              <li>CA Final</li>
              <li>Test Series</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Free Classes</li>
              <li>Study Material</li>
              <li>Mock Tests</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CA Monk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


export default Footer;