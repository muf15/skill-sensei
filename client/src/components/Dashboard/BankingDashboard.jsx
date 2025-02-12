import React from 'react';
import { 
  Search, 
  Bell, 
  CreditCard, 
  Users, 
  Briefcase, 
  Send,
  Settings,
  Gift,
  ChevronRight
} from 'lucide-react';
import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { div } from 'framer-motion/client';

const BankingDashboard = () => {
  // Sample data for charts
  const expenseData = [
    { name: "Maths", value: 30 },
    { name: "AI/ML", value: 20 },
    { name: "Matlab", value: 15 },
    { name: "Discrete Signals", value: 35 }
  ];

  const balanceHistoryData = [
    { name: 'Jul', value: 300 },
    { name: 'Aug', value: 400 },
    { name: 'Sep', value: 600 },
    { name: 'Oct', value: 400 },
    { name: 'Nov', value: 500 },
    { name: 'Dec', value: 300 },
    { name: 'Jan', value: 400 },
  ];

  const COLORS = ['#312e81', '#ec4899', '#f97316', '#2563eb'];

  const sidebarItems = [
    { icon: <CreditCard className="w-5 h-5" />, label: "Dashboard", active: true },
    { icon: <Send className="w-5 h-5" />, label: "Transactions" },
    { icon: <Users className="w-5 h-5" />, label: "Accounts" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Investments" },
    { icon: <CreditCard className="w-5 h-5" />, label: "Credit Cards" },
    { icon: <Gift className="w-5 h-5" />, label: "Loans" },
    { icon: <Settings className="w-5 h-5" />, label: "Services" },
  ];

  const quickTransferUsers = [
    { name: "Livia Bator", role: "CEO", img: "/api/placeholder/40/40" },
    { name: "Randy Press", role: "Director", img: "/api/placeholder/40/40" },
    { name: "Workman", role: "Designer", img: "/api/placeholder/40/40" },
  ];

  const recentTransactions = [
    { name: "Deposit from my Card", date: "28 January 2021", amount: "-850" },
    { name: "Deposit Paypal", date: "25 January 2021", amount: "+2,500" },
    { name: "Jemi Wilson", date: "21 January 2021", amount: "+5,400" },
  ];

  return (

    <div className="flex min-h-screen mt-24 bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white p-4 border-r">
        <div className="flex items-center mb-8">
          <CreditCard className="w-8 h-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold">Skill Sensie</span>
        </div>
        
        <nav className="flex-1">
          {sidebarItems.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer
                ${item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for something"
                className="pl-10 pr-4 py-2 border rounded-lg w-64"
              />
            </div>
            <Bell className="w-6 h-6 text-gray-600" />
            <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">My Cards</h2>
            <button className="text-blue-600">See All</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Credit Card */}
          <div className="bg-orange-400 p-6 rounded-xl text-white">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm opacity-80">Balance</p>
                <p className="text-2xl font-bold">$5,756</p>
              </div>
              <CreditCard className="w-8 h-8" />
            </div>
            <div className="mb-4">
              <p className="text-sm opacity-80">CARD HOLDER</p>
              <p>Eddy Cusuma</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-xl">3778 **** **** 1234</p>
              <div>
                <p className="text-sm opacity-80">VALID THRU</p>
                <p>12/22</p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Expense Statistics</h3>
            <div className="w-full h-64">
              <PieChart width={250} height={250}>
                <Pie
                  data={expenseData}
                  cx={125}
                  cy={125}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Quick Transfer */}
          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Quick Transfer</h3>
            <div className="flex space-x-4 mb-4">
              {quickTransferUsers.map((user, index) => (
                <div key={index} className="text-center">
                  <img src={user.img} alt={user.name} className="w-12 h-12 rounded-full mx-auto mb-2" />
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              ))}
              <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Write amount"
                className="flex-1 p-2 border rounded-lg"
              />
              <button className="px-4 py-2 bg-orange-400 text-white rounded-lg flex items-center">
                Send <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Balance History */}
          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Balance History</h3>
            <div className="w-full h-64">
              <AreaChart
                width={500}
                height={200}
                data={balanceHistoryData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#f97316"
                  fill="#fed7aa"
                />
              </AreaChart>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block w-80 bg-white p-6 border-l">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Recent Transaction</h3>
          <button className="text-blue-600">See All</button>
        </div>
        <div className="space-y-4">
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <CreditCard className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <span className={`font-medium ${
                transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {transaction.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default BankingDashboard;