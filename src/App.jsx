import React from 'react';
import { FiSearch, FiBell, FiSettings, FiClock } from 'react-icons/fi';
import { FaCheckCircle, FaMoon } from 'react-icons/fa';

const InvoiceDetails = () => {
  return (
    <div className="flex h-screen font-sans bg-gray-100">
      <aside className="w-64 bg-[#0f172a] text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          <span role="img" aria-label="cart">🧺</span> Larkon
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-3 text-sm">
            <li className="font-semibold">GENERAL</li>
            <li className="hover:text-yellow-300">Dashboard</li>
            <li className="hover:text-yellow-300">Products</li>
            <li className="hover:text-yellow-300">Category</li>
            <li className="hover:text-yellow-300">Inventory</li>
            <li className="hover:text-yellow-300">Orders</li>
            <li className="hover:text-yellow-300">Purchases</li>
            <li className="hover:text-yellow-300">Attributes</li>
            <li className="mt-4 font-semibold">Invoices</li>
            <li className="ml-4 text-yellow-400 font-bold">Details</li>
            <li className="ml-4 hover:text-yellow-300">Create</li>
            <li className="mt-4 font-semibold">USERS</li>
            <li className="hover:text-yellow-300">Profile</li>
            <li className="hover:text-yellow-300">Roles</li>
          </ul>
        </nav>
      </aside>

    
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center px-10 py-4 bg-[#f9f7f7] shadow-sm">
          <h1 className="text-md font-semibold text-gray-600">INVOICE DETAILS</h1>
          <div className="flex items-center space-x-4">
            <FaMoon className="text-gray-500 cursor-pointer" />
            <div className="relative">
              <FiBell className="text-gray-500 cursor-pointer" />
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">3</span>
            </div>
            <FiSettings className="text-gray-500 cursor-pointer" />
            <FiClock className="text-gray-500 cursor-pointer" />
            <img src="https://i.ibb.co/Vg6JHkR/profile.jpg" alt="user" className="w-8 h-8 rounded-full" />
            <div className="relative">
              <input
                className="pl-10 pr-4 py-1.5 bg-gray-200 rounded-md focus:outline-none text-sm"
                placeholder="Search..."
              />
              <FiSearch className="absolute top-2 left-2 text-gray-500 text-sm" />
            </div>
          </div>
        </header>

        {/* Invoice Card */}
        <div className="p-10">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-lg">Larkon Admin.</h2>
                <p>1729 Bangor St,<br />Houlton, ME, 04730, United States</p>
                <p className="text-blue-600 underline text-sm">Phone: +1(142)-532-9109</p>
              </div>
              <div className="text-right">
                <p><strong>Invoice :</strong> #INV-0758267/90</p>
                <p><strong>Issue Date :</strong> 23 April 2024</p>
                <p><strong>Due Date :</strong> 26 April 2024</p>
                <p><strong>Amount :</strong> <span className="text-green-600 font-bold">$737.00</span></p>
                <span className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full text-sm">Paid</span>
              </div>
            </div>

            <div className="flex justify-center my-6">
              <FaCheckCircle className="text-green-500 text-6xl" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold">Issue From :</h3>
                <p>Larkon Admin.INC<br />2437 Romano Street Cambridge, MA 02141</p>
                <p className="text-blue-600 underline text-sm">Phone: (+31)781-417-2004</p>
                <p className="text-blue-600 underline text-sm">Email: JulianeKuhn@jourarapide.com</p>
              </div>
              <div>
                <h3 className="font-bold">Issue For :</h3>
                <p>Gaston Lapierre<br />1344 Hershell Hollow Road WA 98168 , USA</p>
                <p className="text-blue-600 underline text-sm">Phone: (+123) 732-760-5760</p>
                <p className="text-blue-600 underline text-sm">Email: hello@dundermufflin.com</p>
              </div>
            </div>

            <div className="mt-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2">Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Tax</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 flex items-center space-x-3">
                      <img src="https://i.ibb.co/Wt5n2Zq/shirt.png" alt="T-shirt" className="w-10 h-10 rounded" />
                      <div>
                        <p>Men Black Slim Fit T-shirt</p>
                        <p className="text-xs text-gray-500">Size : M</p>
                      </div>
                    </td>
                    <td>1</td>
                    <td>$80.00</td>
                    <td>$3.00</td>
                    <td>$83.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 flex items-center space-x-3">
                      <img src="https://i.ibb.co/yNPhJXf/pant.png" alt="Pant" className="w-10 h-10 rounded" />
                      <div>
                        <p>Dark Green Cargo Pant</p>
                        <p className="text-xs text-gray-500">Size : M</p>
                      </div>
                    </td>
                    <td>3</td>
                    <td>$110.00</td>
                    <td>$4.00</td>
                    <td>$330.00</td>
                  </tr>
                  <tr>
                    <td className="py-2 flex items-center space-x-3">
                      <img src="https://i.ibb.co/QpD2Bfx/wallet.png" alt="Wallet" className="w-10 h-10 rounded" />
                      <div>
                        <p>Men Dark Brown Wallet</p>
                        <p className="text-xs text-gray-500">Size : M</p>
                      </div>
                    </td>
                    <td>1</td>
                    <td>$132.00</td>
                    <td>$5.00</td>
                    <td>$137.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvoiceDetails;