import RadioInput from "./components/radio-input"

function App() {

  return (
    <main className="bg-Green-200-lighter h-screen pt-10">
      <form action="" className="bg-white w-150 m-auto p-4 rounded-2x1">
        <h2>Contact Us</h2>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="name">First Name</label>
            <input 
              id="name" 
              className="border border-Grey-500-medium w-full rounded-sm" 
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="second_name">Second Name</label>
            <input 
              id="second_name" 
              className="border border-Grey-500-medium w-full rounded-sm" 
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input 
            id="email" 
            className="border border-Grey-500-medium w-full rounded-sm" 
            type="email"
          />
        </div>

        <h3>Query Type</h3>
        <div className="flex gap-4">
          <RadioInput label="General Enquiry" id="general_enquiry" />
          <RadioInput label="Support Request" id="support_request" />
        </div>

      </form>
    </main>
  )
}

export default App
