import { useState, useEffect, useRef } from 'react'
import {
  Shield,
  Send,
  Eye,
  EyeOff,
  User,
  Lock,
  Wifi,
  Battery,
  Signal,
  ArrowLeft,
  MoreVertical,
  Phone,
  Video,
  Settings,
  Search,
  Image,
  Paperclip
} from 'lucide-react'

interface Message {
  id: string
  sender: 'user' | 'contact'
  realMessage: string
  decoyMessage: string
  timestamp: string
  isDecrypted: boolean
  type?: 'text' | 'image'
  realImage?: string
  decoyImage?: string
}

const PhoneSimulator = () => {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'chat' | 'settings'>('home')
  const [viewMode, setViewMode] = useState<'decoy' | 'real'>('decoy')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [autoDemo, setAutoDemo] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Initialize with demo messages
  useEffect(() => {
    setMessages([
      {
        id: '1',
        sender: 'contact',
        realMessage: 'The documents are ready for pickup',
        decoyMessage: 'Great weather today, isn\'t it?',
        timestamp: '10:30',
        isDecrypted: isAuthenticated
      },
      {
        id: '2',
        sender: 'user',
        realMessage: 'Perfect, I\'ll be there at 3pm',
        decoyMessage: 'Yes, perfect for a walk!',
        timestamp: '10:32',
        isDecrypted: isAuthenticated
      },
      {
        id: '3',
        sender: 'contact',
        realMessage: 'Bring the USB drive',
        decoyMessage: 'Don\'t forget your umbrella',
        timestamp: '10:35',
        isDecrypted: isAuthenticated
      }
    ])
  }, [isAuthenticated])

  // Auto demo conversation script
  const demoConversation = [
    { sender: 'user', real: 'Hello, are you ready?', decoy: 'Nice weather today!', type: 'text' },
    { sender: 'contact', real: 'Yes, the documents are prepared', decoy: 'Perfect for a walk!', type: 'text' },
    {
      sender: 'user',
      real: 'Here are the classified files',
      decoy: 'Check out this sunset photo!',
      type: 'image',
      realImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjEwMCIgeT0iNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNMQVNTSUZJRUQgRE9DVU1FTlQ8L3RleHQ+PC9zdmc+',
      decoyImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InN1bnNldCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGNjUwMDtzdG9wLW9wYWNpdHk6MSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkM0MDA7c3RvcC1vcGFjaXR5OjEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9InVybCgjc3Vuc2V0KSIvPjxjaXJjbGUgY3g9IjE2MCIgY3k9IjQwIiByPSIyMCIgZmlsbD0iI0ZGRkYwMCIvPjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJlYXV0aWZ1bCBTdW5zZXQ8L3RleHQ+PC9zdmc+'
    },
    { sender: 'contact', real: 'Received. Password is: SecureKey2024', decoy: 'Wow, gorgeous colors!', type: 'text' },
    { sender: 'user', real: 'Perfect. Meet at the secure location?', decoy: 'Thanks! Taken at the park.', type: 'text' },
    {
      sender: 'contact',
      real: 'Here\'s the building layout',
      decoy: 'Here\'s my lunch today!',
      type: 'image',
      realImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzAwMzM2NiIvPjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIxMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iNDAiIHk9IjQwIiB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHJlY3QgeD0iMTIwIiB5PSI0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjEwMCIgeT0iMTQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJVSUxESU5HIExBWU9VVDwvdGV4dD48L3N2Zz4=',
      decoyImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI0Y1RjVGNSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjYwIiByPSIzMCIgZmlsbD0iI0ZGNjUwMCIvPjxyZWN0IHg9IjcwIiB5PSI5MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjOEI0NTEzIi8+PGNpcmNsZSBjeD0iNjAiIGN5PSI4MCIgcj0iMTAiIGZpbGw9IiNGRkQ3MDAiLz48Y2lyY2xlIGN4PSIxNDAiIGN5PSI4MCIgcj0iMTAiIGZpbGw9IiNGRkQ3MDAiLz48dGV4dCB4PSIxMDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EZWxpY2lvdXMgTHVuY2ghPC90ZXh0Pjwvc3ZnPg=='
    },
    { sender: 'user', real: 'Got it. This is confidential, right?', decoy: 'Looks delicious! What restaurant?', type: 'text' },
    { sender: 'contact', real: 'Absolutely. Delete this conversation after', decoy: 'Local cafe downtown. Great food!', type: 'text' }
  ]

  // Start auto demo
  const startAutoDemo = () => {
    setAutoDemo(true)
    setDemoStep(0)
    setMessages([])
    // Don't automatically switch to chat screen - let user navigate manually
    // setCurrentScreen('chat')
  }

  // Auto demo effect - only run when on chat screen
  useEffect(() => {
    if (!autoDemo || demoStep >= demoConversation.length || currentScreen !== 'chat') return

    const timer = setTimeout(() => {
      const currentMsg = demoConversation[demoStep]
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

      // Show typing indicator
      setIsTyping(true)

      setTimeout(() => {
        const newMsg: Message = {
          id: `demo-${demoStep}`,
          sender: currentMsg.sender as 'user' | 'contact',
          realMessage: currentMsg.real,
          decoyMessage: currentMsg.decoy,
          timestamp,
          isDecrypted: isAuthenticated,
          type: (currentMsg as any).type || 'text',
          realImage: (currentMsg as any).realImage,
          decoyImage: (currentMsg as any).decoyImage
        }

        setMessages(prev => [...prev, newMsg])
        setIsTyping(false)
        setDemoStep(prev => prev + 1)
      }, 1500) // Typing delay

    }, 2000) // Delay between messages

    return () => clearTimeout(timer)
  }, [autoDemo, demoStep, isAuthenticated, currentScreen])

  // Stop auto demo
  const stopAutoDemo = () => {
    setAutoDemo(false)
    setDemoStep(0)
    setIsTyping(false)
  }

  // Generate decoy message based on real message
  const generateDecoyMessage = (realMessage: string): string => {
    const decoyMappings: { [key: string]: string } = {
      // Greetings
      'hello': 'Nice weather today!',
      'hi': 'How are you doing?',
      'hey': 'Good morning!',
      'good morning': 'Have a great day!',
      'good evening': 'Sleep well!',

      // Common phrases
      'yes': 'Sounds good!',
      'no': 'Maybe later.',
      'okay': 'Alright then.',
      'sure': 'Of course!',
      'thanks': 'You\'re welcome!',
      'thank you': 'No problem!',

      // Meeting/location related
      'meeting': 'lunch tomorrow',
      'location': 'the park',
      'address': 'my house',
      'time': '3 PM',
      'when': 'this weekend',
      'where': 'downtown',

      // Sensitive keywords
      'documents': 'photos',
      'files': 'recipes',
      'password': 'birthday',
      'secure': 'safe',
      'encrypted': 'private',
      'confidential': 'personal',
      'urgent': 'important',
      'secret': 'surprise',
      'classified': 'special',

      // Actions
      'send': 'share',
      'deliver': 'bring',
      'pickup': 'visit',
      'drop off': 'stop by',
      'transfer': 'give',

      // Technology
      'usb': 'book',
      'drive': 'notebook',
      'laptop': 'bag',
      'phone': 'wallet',
      'device': 'item'
    }

    let decoyMessage = realMessage.toLowerCase()

    // Replace sensitive words with innocent alternatives
    Object.entries(decoyMappings).forEach(([real, decoy]) => {
      const regex = new RegExp(`\\b${real}\\b`, 'gi')
      decoyMessage = decoyMessage.replace(regex, decoy)
    })

    // If no specific mappings found, use generic innocent responses
    if (decoyMessage === realMessage.toLowerCase()) {
      const genericDecoys = [
        'That sounds interesting!',
        'I agree with that.',
        'Thanks for letting me know.',
        'Have a great day!',
        'Talk to you later.',
        'That\'s good to hear.',
        'I understand.',
        'No problem at all.',
        'Sounds like a plan!',
        'Looking forward to it.',
        'That works for me.',
        'Perfect timing!',
        'Great idea!',
        'I\'ll keep that in mind.',
        'Thanks for the update!'
      ]
      decoyMessage = genericDecoys[Math.floor(Math.random() * genericDecoys.length)]
    }

    // Capitalize first letter
    return decoyMessage.charAt(0).toUpperCase() + decoyMessage.slice(1)
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const now = new Date()
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      realMessage: newMessage,
      decoyMessage: generateDecoyMessage(newMessage),
      timestamp,
      isDecrypted: isAuthenticated
    }

    setMessages(prev => [...prev, newMsg])
    setNewMessage('')

    // Simulate contact response after 2 seconds
    setTimeout(() => {
      const responses = [
        { real: 'Got it, will handle that.', decoy: 'Sounds good to me!' },
        { real: 'Understood, proceeding as planned.', decoy: 'Great, see you then!' },
        { real: 'Confirmed, everything is ready.', decoy: 'Perfect, thanks!' },
        { real: 'Message received, standing by.', decoy: 'Alright, talk soon!' },
        { real: 'Copy that, will be in touch.', decoy: 'Have a wonderful day!' }
      ]

      const response = responses[Math.floor(Math.random() * responses.length)]
      const responseMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'contact',
        realMessage: response.real,
        decoyMessage: response.decoy,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isDecrypted: isAuthenticated
      }

      setMessages(prev => [...prev, responseMsg])
    }, 2000)
  }

  // Get the latest message for contacts list
  const getLatestMessage = () => {
    if (messages.length === 0) return ''
    const lastMessage = messages[messages.length - 1]
    return viewMode === 'real' && isAuthenticated ? lastMessage.realMessage : lastMessage.decoyMessage
  }

  const getLatestMessageTime = () => {
    if (messages.length === 0) return '10:35'
    return messages[messages.length - 1].timestamp
  }

  const contacts = [
    {
      name: 'Sarah Chen',
      lastMessage: getLatestMessage() || (viewMode === 'real' && isAuthenticated ? 'Bring the USB drive' : 'Don\'t forget your umbrella'),
      time: getLatestMessageTime(),
      unread: messages.length > 3 ? 1 : 2
    },
    { name: 'Marcus Rodriguez', lastMessage: 'See you tomorrow', time: '09:15', unread: 0 },
    { name: 'Dr. Emily Watson', lastMessage: 'Meeting confirmed', time: 'Yesterday', unread: 1 },
  ]

  const handleAuthenticate = () => {
    setIsAuthenticated(true)
    setShowAuthModal(false)
    setViewMode('real')
  }

  const toggleViewMode = () => {
    if (viewMode === 'decoy' && !isAuthenticated) {
      setShowAuthModal(true)
    } else {
      setViewMode(viewMode === 'decoy' ? 'real' : 'decoy')
    }
  }

  const StatusBar = () => (
    <div className="flex justify-between items-center px-4 py-2 bg-black text-white text-xs">
      <div className="flex items-center space-x-1">
        <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
      <div className="flex items-center space-x-1">
        <Signal className="w-3 h-3" />
        <Wifi className="w-3 h-3" />
        <Battery className="w-4 h-2" />
        <span>100%</span>
      </div>
    </div>
  )

  const HomeScreen = () => (
    <div className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Shield className="w-8 h-8 text-primary-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">CypherChat</span>
        </div>
        <div className="flex items-center space-x-3">
          <Search className="w-6 h-6 text-gray-600" />
          <MoreVertical className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="mb-4">
        <button
          onClick={toggleViewMode}
          className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full justify-center ${
            viewMode === 'real' && isAuthenticated
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {viewMode === 'real' && isAuthenticated ? (
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
      </div>

      {/* Contacts List */}
      <div className="space-y-2">
        {contacts.map((contact, index) => (
          <div
            key={index}
            onClick={() => setCurrentScreen('chat')}
            className="bg-white p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
              </div>
              {contact.unread > 0 && (
                <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">{contact.unread}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>


    </div>
  )

  const ChatScreen = () => (
    <div className="flex-1 flex flex-col bg-white">
      {/* Chat Header */}
      <div className="bg-primary-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => setCurrentScreen('home')}>
              <ArrowLeft className="w-6 h-6 mr-3" />
            </button>
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="ml-3">
              <h2 className="font-semibold">Sarah Chen</h2>
              <p className="text-sm text-primary-100">
                {viewMode === 'real' && isAuthenticated ? 'Secure Mode' : 'Online'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5" />
            <Video className="w-5 h-5" />
            <MoreVertical className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-96" style={{ scrollBehavior: 'smooth' }}>
        {messages.map((message) => (
          <div key={message.id} className="space-y-2">
            <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs rounded-lg ${
                  message.type === 'image' ? 'overflow-hidden' : 'px-3 py-2'
                } ${
                  message.sender === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-900'
                }`}
              >
                {message.type === 'image' ? (
                  <div>
                    <img
                      src={viewMode === 'real' && (isAuthenticated || message.isDecrypted)
                        ? message.realImage
                        : message.decoyImage}
                      alt="Shared image"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="px-3 py-2">
                      <p className="text-sm">
                        {viewMode === 'real' && (isAuthenticated || message.isDecrypted)
                          ? message.realMessage
                          : message.decoyMessage}
                      </p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm">
                      {viewMode === 'real' && (isAuthenticated || message.isDecrypted)
                        ? message.realMessage
                        : message.decoyMessage}
                    </p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Show comparison during auto demo */}
            {autoDemo && message.realMessage !== message.decoyMessage && (
              <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-xs">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-xs">
                    <div className="font-medium text-yellow-800 mb-1">
                      {viewMode === 'real' && isAuthenticated ? 'Decoy version:' : 'Real version:'}
                    </div>
                    <div className="text-yellow-700">
                      {viewMode === 'real' && isAuthenticated ? message.decoyMessage : message.realMessage}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-200 px-4 py-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              // Simulate sending a picture
              const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              const imageMsg: Message = {
                id: Date.now().toString(),
                sender: 'user',
                realMessage: 'Confidential document scan',
                decoyMessage: 'Beautiful sunset photo',
                timestamp,
                isDecrypted: isAuthenticated,
                type: 'image',
                realImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjEwMCIgeT0iNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNPTkZJREVOVElBTDwvdGV4dD48L3N2Zz4=',
                decoyImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InN1bnNldCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGNjUwMDtzdG9wLW9wYWNpdHk6MSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkM0MDA7c3RvcC1vcGFjaXR5OjEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9InVybCgjc3Vuc2V0KSIvPjxjaXJjbGUgY3g9IjE2MCIgY3k9IjQwIiByPSIyMCIgZmlsbD0iI0ZGRkYwMCIvPjx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJlYXV0aWZ1bCBTdW5zZXQ8L3RleHQ+PC9zdmc+'
              }
              setMessages(prev => [...prev, imageMsg])
            }}
            className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
          >
            <Image className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage()
                }
              }}
              placeholder={viewMode === 'real' ? 'Type secure message...' : 'Type message...'}
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Show decoy preview when typing */}
        {newMessage.trim() && (
          <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="text-xs font-medium text-yellow-800 mb-1">
              {viewMode === 'real' && isAuthenticated ? 'Real message:' : 'Decoy preview:'}
            </div>
            <div className="text-sm text-yellow-700">
              {viewMode === 'real' && isAuthenticated ? newMessage : generateDecoyMessage(newMessage)}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="w-80 h-[600px] max-w-full bg-black rounded-[2.5rem] p-2 shadow-2xl mx-auto sm:mx-0">
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
          <StatusBar />
          
          {currentScreen === 'home' && <HomeScreen />}
          {currentScreen === 'chat' && <ChatScreen />}
          
          {/* Navigation Bar */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[2.5rem] flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 m-8 max-w-sm">
            <div className="text-center mb-6">
              <Lock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Authenticate to View Real Messages
              </h3>
              <p className="text-gray-600 text-sm">
                Use biometrics or PIN to decrypt your secure conversations.
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={handleAuthenticate}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium"
              >
                Authenticate (Demo)
              </button>
              <button
                onClick={() => setShowAuthModal(false)}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo Controls */}
      <div className="mt-6 text-center">
        <div className="flex justify-center space-x-2 mb-4">
          <button
            onClick={() => setCurrentScreen('home')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentScreen === 'home'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentScreen('chat')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentScreen === 'chat'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Chat
          </button>
          {!autoDemo ? (
            <button
              onClick={startAutoDemo}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              {currentScreen === 'chat' ? 'Start Auto Demo' : 'Enable Auto Demo'}
            </button>
          ) : (
            <button
              onClick={stopAutoDemo}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              Stop Demo
            </button>
          )}
        </div>

        {/* Mode Toggle for Demo */}
        <div className="flex justify-center mb-4">
          <button
            onClick={toggleViewMode}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'real' && isAuthenticated
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-yellow-100 text-yellow-800 border border-yellow-300'
            }`}
          >
            {viewMode === 'real' && isAuthenticated ? (
              <>
                <Eye className="w-4 h-4 mr-2 inline" />
                Viewing Real Messages
              </>
            ) : (
              <>
                <EyeOff className="w-4 h-4 mr-2 inline" />
                Viewing Decoy Messages
              </>
            )}
          </button>
        </div>


      </div>
    </div>
  )
}

export default PhoneSimulator
