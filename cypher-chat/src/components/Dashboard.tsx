import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  Send,
  Eye,
  EyeOff,
  Settings,
  LogOut,
  User,
  Lock,
  AlertTriangle,
  Trash2,
  Search
} from 'lucide-react'

interface Message {
  id: string
  sender: 'user' | 'contact'
  realMessage: string
  decoyMessage: string
  timestamp: Date
  isDecrypted: boolean
}

const Dashboard = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'contact',
      realMessage: 'Hey! How are you doing?',
      decoyMessage: 'Did you see the weather forecast?',
      timestamp: new Date(Date.now() - 3600000),
      isDecrypted: false
    },
    {
      id: '2',
      sender: 'user',
      realMessage: 'I\'m good, thanks! Working on something important.',
      decoyMessage: 'Yes, it looks like rain tomorrow.',
      timestamp: new Date(Date.now() - 3000000),
      isDecrypted: false
    },
    {
      id: '3',
      sender: 'contact',
      realMessage: 'Great! Let me know if you need any help.',
      decoyMessage: 'Better bring an umbrella then!',
      timestamp: new Date(Date.now() - 1800000),
      isDecrypted: false
    }
  ])

  const [newMessage, setNewMessage] = useState('')
  const [newDecoy, setNewDecoy] = useState('')
  const [showDecoyInput, setShowDecoyInput] = useState(false)
  const [viewMode, setViewMode] = useState<'decoy' | 'real'>('decoy')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleAuthenticate = () => {
    setIsAuthenticated(true)
    setShowAuthModal(false)
    setViewMode('real')
    // Decrypt all messages
    setMessages(prev => prev.map(msg => ({ ...msg, isDecrypted: true })))
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      sender: 'user',
      realMessage: newMessage,
      decoyMessage: newDecoy || generateDecoyMessage(),
      timestamp: new Date(),
      isDecrypted: isAuthenticated
    }

    setMessages(prev => [...prev, message])
    setNewMessage('')
    setNewDecoy('')
    setShowDecoyInput(false)

    // Simulate response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'contact',
        realMessage: 'Got it! Thanks for the update.',
        decoyMessage: 'Sounds good, have a great day!',
        timestamp: new Date(),
        isDecrypted: isAuthenticated
      }
      setMessages(prev => [...prev, response])
    }, 1000)
  }

  const generateDecoyMessage = () => {
    const decoys = [
      'That sounds interesting!',
      'I agree with that.',
      'Thanks for letting me know.',
      'Have a great day!',
      'Talk to you later.',
      'That\'s good to hear.',
      'I understand.',
      'No problem at all.'
    ]
    return decoys[Math.floor(Math.random() * decoys.length)]
  }

  const handleEmergencyWipe = () => {
    if (confirm('This will permanently delete all messages. Are you sure?')) {
      setMessages([])
      setIsAuthenticated(false)
      setViewMode('decoy')
    }
  }

  const toggleViewMode = () => {
    if (viewMode === 'decoy' && !isAuthenticated) {
      setShowAuthModal(true)
    } else {
      setViewMode(viewMode === 'decoy' ? 'real' : 'decoy')
    }
  }

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <Shield className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CypherChat</span>
            </Link>
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              Demo Mode
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* View Mode Toggle */}
            <button
              onClick={toggleViewMode}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'real' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {viewMode === 'real' ? (
                <>
                  <Eye className="w-4 h-4 mr-2" />
                  Real Messages
                </>
              ) : (
                <>
                  <EyeOff className="w-4 h-4 mr-2" />
                  Decoy Mode
                </>
              )}
            </button>

            {/* Emergency Wipe */}
            <button
              onClick={handleEmergencyWipe}
              className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-red-700 hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Emergency Wipe
            </button>

            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5" />
            </button>
            
            <Link to="/" className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <LogOut className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center p-3 rounded-lg bg-primary-50 border border-primary-200">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-medium text-gray-900">Demo Contact</h3>
                <p className="text-sm text-gray-500">Online</p>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="ml-3">
                  <h2 className="font-semibold text-gray-900">Demo Contact</h2>
                  <p className="text-sm text-gray-500">
                    {viewMode === 'real' ? 'Viewing real messages' : 'Viewing decoy messages'}
                  </p>
                </div>
              </div>
              
              {viewMode === 'real' && (
                <div className="flex items-center text-green-600">
                  <Lock className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">End-to-End Encrypted</span>
                </div>
              )}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}
                >
                  <p className="text-sm">
                    {viewMode === 'real' && (isAuthenticated || message.isDecrypted)
                      ? message.realMessage
                      : message.decoyMessage}
                  </p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            {showDecoyInput && (
              <div className="mb-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <label className="block text-sm font-medium text-yellow-800 mb-2">
                  Decoy Message (what others will see):
                </label>
                <input
                  type="text"
                  value={newDecoy}
                  onChange={(e) => setNewDecoy(e.target.value)}
                  placeholder="Enter decoy message or leave blank for auto-generation"
                  className="w-full px-3 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            )}
            
            <div className="flex items-end space-x-3">
              <div className="flex-1">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder={viewMode === 'real' ? 'Type your real message...' : 'Type your message...'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  rows={1}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                />
              </div>
              
              <button
                onClick={() => setShowDecoyInput(!showDecoyInput)}
                className={`p-3 rounded-lg transition-colors ${
                  showDecoyInput 
                    ? 'bg-yellow-100 text-yellow-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="Add decoy message"
              >
                <EyeOff className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="btn-primary p-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Authentication Required
              </h3>
              <p className="text-gray-600">
                To view real messages, please authenticate with biometrics or PIN.
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={handleAuthenticate}
                className="w-full btn-primary py-3"
              >
                Authenticate (Demo)
              </button>
              <button
                onClick={() => setShowAuthModal(false)}
                className="w-full btn-secondary py-3"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
