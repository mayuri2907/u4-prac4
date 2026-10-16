import { useState } from 'react';

function App() {
  // Step 1: Manage all input fields in a single controlled state object
  const initialFormState = {
    fullName: '',
    email: '',
    phone: '',
    gender: 'Female',
    course: 'B.Tech Computer Science',
    semester: 'Semester 4',
    address: '',
    agreed: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Step 2: Handle input changes dynamically for all form elements
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in both Full Name and Email Address.');
      return;
    }
    if (!formData.agreed) {
      setErrorMessage('Please agree to the terms and conditions before submitting.');
      return;
    }

    setErrorMessage('');
    // Save submitted data to display below
    setSubmittedData({ ...formData, submittedAt: new Date().toLocaleTimeString() });
  };

  // Step 4: Reset form
  const handleReset = () => {
    setFormData(initialFormState);
    setSubmittedData(null);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-slate-800">
              StudentPortal<span className="text-emerald-700">.</span>
            </span>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
              U4-PRAC 4
            </span>
          </div>
          <span className="text-xs font-medium text-slate-500">
            Controlled Component via useState()
          </span>
        </div>
      </header>

      {/* Lab Banner */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 shadow-xs">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-600 gap-1">
          <div>
            <span className="font-semibold text-slate-800">Practical 4:</span> Student Registration Form (Controlled Component)
          </div>
          <div className="text-emerald-700 font-medium">
            ● Unit 4 – Forms & State Management
          </div>
        </div>
      </div>

      {/* Main Form Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded border border-emerald-200">
                Controlled Inputs
              </span>
              <h1 className="text-2xl font-bold text-slate-800 mt-2">
                Student Registration Form
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Every keystroke updates the React state object. The input values are bound directly to state.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-md">
                ⚠ {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Mayuri Vaishnav"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              {/* Course & Semester */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Course / Branch
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="B.Tech Computer Science">B.Tech Computer Science</option>
                    <option value="B.Tech Information Technology">B.Tech Information Technology</option>
                    <option value="BCA (Bachelor of Computer Apps)">BCA</option>
                    <option value="MCA (Master of Computer Apps)">MCA</option>
                    <option value="Diploma Engineering">Diploma Engineering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Semester
                  </label>
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="Semester 1">Semester 1</option>
                    <option value="Semester 2">Semester 2</option>
                    <option value="Semester 3">Semester 3</option>
                    <option value="Semester 4">Semester 4</option>
                    <option value="Semester 5">Semester 5</option>
                    <option value="Semester 6">Semester 6</option>
                  </select>
                </div>
              </div>

              {/* Gender Radio */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Gender
                </label>
                <div className="flex space-x-4">
                  {['Female', 'Male', 'Other'].map((g) => (
                    <label key={g} className="inline-flex items-center text-xs text-slate-700">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={formData.gender === g}
                        onChange={handleChange}
                        className="mr-1.5 text-emerald-700 focus:ring-emerald-700"
                      />
                      {g}
                    </label>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Permanent Address
                </label>
                <textarea
                  name="address"
                  rows="2"
                  placeholder="Enter residential address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                ></textarea>
              </div>

              {/* Agree Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="mr-2 rounded text-emerald-700 focus:ring-emerald-700"
                />
                <label htmlFor="agreed" className="text-xs text-slate-600">
                  I confirm that the details provided above are true and accurate.
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 bg-emerald-700 text-white rounded-md text-sm font-medium hover:bg-emerald-800 transition shadow-xs"
                >
                  Submit Registration
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="py-2.5 px-4 bg-slate-100 text-slate-700 rounded-md text-sm font-medium hover:bg-slate-200 transition border border-slate-300"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>

          {/* Output / Display Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live State Inspector */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <h3 className="text-xs font-bold uppercase text-slate-500 font-mono">
                  Live React State (useState)
                </h3>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                  Controlled Sync
                </span>
              </div>
              <pre className="text-xs font-mono bg-slate-50 p-3 rounded border border-slate-200 text-slate-700 overflow-x-auto">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>

            {/* Submitted Information Card */}
            {submittedData ? (
              <div className="bg-white p-6 rounded-xl border-2 border-emerald-600 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-emerald-700">
                  <span className="text-xl">✓</span>
                  <h3 className="font-bold text-base text-slate-800">
                    Registration Submitted Successfully!
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  Submitted at: <span className="font-mono">{submittedData.submittedAt}</span>
                </p>

                <div className="border-t border-slate-200 pt-3 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Full Name:</span>
                    <span className="font-semibold text-slate-800">{submittedData.fullName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Email:</span>
                    <span className="font-semibold text-slate-800">{submittedData.email}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Phone:</span>
                    <span className="font-semibold text-slate-800">{submittedData.phone || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Course:</span>
                    <span className="font-semibold text-slate-800">{submittedData.course}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Semester:</span>
                    <span className="font-semibold text-slate-800">{submittedData.semester}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Gender:</span>
                    <span className="font-semibold text-slate-800">{submittedData.gender}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Address:</span>
                    <span className="font-semibold text-slate-800 text-right">{submittedData.address || 'N/A'}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-xl border border-dashed border-slate-300 text-center text-slate-500 text-xs">
                Fill in the form and click <strong>Submit Registration</strong> to view the submitted student information card here.
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        React Practical 4 | Controlled Form with useState()
      </footer>
    </div>
  );
}

export default App;
