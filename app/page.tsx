import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Instagram,
  Youtube,
  TwitterIcon as TikTok,
  Mail,
  Phone,
  MapPin,
  Star,
  Play,
  Dumbbell,
  Camera,
  Music,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold text-gray-900">ALEX</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          {/* CTA Button */}
          <Button className="hidden sm:flex bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-sm lg:text-base">
            Work With Me
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 text-xs sm:text-sm">
                    Fitness Influencer
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs sm:text-sm">
                    Model
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs sm:text-sm">
                    Dancer
                  </Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Body & Mind
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Professional fitness coach, international model, and passionate dancer helping you unlock your full
                  potential through movement, strength, and confidence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 w-full sm:w-auto"
                >
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 bg-transparent w-full sm:w-auto">
                  <Play className="w-4 h-4 mr-2" />
                  Watch My Story
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <TikTok className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="relative z-10 max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Alex - Fitness Influencer, Model & Dancer"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl drop-shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl -z-10 drop-shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                ✨ Trusted Partnerships
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Collaborating with{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Proud to work alongside the world's most innovative brands in fitness, fashion, and lifestyle
            </p>
          </div>

          {/* Main scrolling logos */}
          <div className="relative">
            <div
              className="flex overflow-hidden"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <div className="flex animate-scroll-logos">
                {/* First set of logos */}
                <div className="flex items-center justify-center min-w-0 shrink-0">
                  <div className="flex items-center space-x-8 sm:space-x-12 lg:space-x-16 px-4 sm:px-6 lg:px-8">
                    {["Nike", "Adidas", "Lululemon", "Under+Armour", "Reebok", "Puma", "Gymshark", "Vogue"].map(
                      (brand, index) => (
                        <div
                          key={index}
                          className="group flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 lg:w-40 lg:h-20 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl drop-shadow-md hover:drop-shadow-lg transition-all duration-500 hover:scale-110 hover:bg-white border border-gray-100/50"
                        >
                          <Image
                            src={`/placeholder.svg?height=50&width=100&text=${brand}`}
                            alt={brand.replace("+", " ")}
                            width={100}
                            height={50}
                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex items-center justify-center min-w-0 shrink-0">
                  <div className="flex items-center space-x-8 sm:space-x-12 lg:space-x-16 px-4 sm:px-6 lg:px-8">
                    {["Nike", "Adidas", "Lululemon", "Under+Armour", "Reebok", "Puma", "Gymshark", "Vogue"].map(
                      (brand, index) => (
                        <div
                          key={`duplicate-${index}`}
                          className="group flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 lg:w-40 lg:h-20 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl drop-shadow-md hover:drop-shadow-lg transition-all duration-500 hover:scale-110 hover:bg-white border border-gray-100/50"
                        >
                          <Image
                            src={`/placeholder.svg?height=50&width=100&text=${brand}`}
                            alt={brand.replace("+", " ")}
                            width={100}
                            height={50}
                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                50+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Brand Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                100M+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Campaign Reach</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                25+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                5
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Multi-Passionate Creator</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Combining the worlds of fitness, fashion, and dance to inspire and empower others to live their best
              lives.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl drop-shadow-md hover:drop-shadow-lg transition-all duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Dumbbell className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Fitness Coach</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Certified personal trainer with 5+ years of experience helping clients achieve their fitness goals
                  through personalized workout plans and nutrition guidance.
                </p>
                <ul className="text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-2">
                  <li>• NASM Certified Personal Trainer</li>
                  <li>• Nutrition Specialist</li>
                  <li>• 500+ Clients Transformed</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl drop-shadow-md hover:drop-shadow-lg transition-all duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Professional Model
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  International fashion and fitness model featured in major campaigns and magazines, bringing confidence
                  and professionalism to every shoot.
                </p>
                <ul className="text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-2">
                  <li>• Featured in Vogue, Elle, GQ</li>
                  <li>• Brand Ambassador for Nike, Adidas</li>
                  <li>• 50+ Fashion Shows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl drop-shadow-md hover:drop-shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Music className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Dance Artist</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Trained in contemporary, hip-hop, and commercial dance styles, performing and choreographing for music
                  videos and live events.
                </p>
                <ul className="text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-2">
                  <li>• 15+ Years Dance Experience</li>
                  <li>• Choreographer for Music Videos</li>
                  <li>• Dance Studio Owner</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How I Can Help You</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Whether you're looking to get fit, build confidence, or express yourself through movement, I offer
              personalized services to help you reach your goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl drop-shadow-md hover:drop-shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">1-on-1 Personal Training</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Customized fitness programs designed specifically for your goals and fitness level.
                </p>
                <div className="text-xl sm:text-2xl font-bold text-pink-600 mb-3 sm:mb-4">$150/session</div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-sm sm:text-base">
                  Book Session
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl drop-shadow-md hover:drop-shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Online Coaching Program</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  12-week transformation program with workout plans, nutrition guidance, and weekly check-ins.
                </p>
                <div className="text-xl sm:text-2xl font-bold text-pink-600 mb-3 sm:mb-4">$297/month</div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-sm sm:text-base">
                  Start Program
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl drop-shadow-md hover:drop-shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Dance Classes</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Group and private dance lessons in contemporary, hip-hop, and commercial styles.
                </p>
                <div className="text-xl sm:text-2xl font-bold text-pink-600 mb-3 sm:mb-4">$75/class</div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-sm sm:text-base">
                  Join Class
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl drop-shadow-md hover:drop-shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Modeling Mentorship</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Learn the ins and outs of the modeling industry with personalized guidance and portfolio development.
                </p>
                <div className="text-xl sm:text-2xl font-bold text-pink-600 mb-3 sm:mb-4">$200/session</div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-sm sm:text-base">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl drop-shadow-md hover:drop-shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Brand Collaborations</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Professional modeling and content creation services for fitness and lifestyle brands.
                </p>
                <div className="text-xl sm:text-2xl font-bold text-pink-600 mb-3 sm:mb-4">Custom Pricing</div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-sm sm:text-base">
                  Inquire
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl drop-shadow-md hover:drop-shadow-lg transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Choreography Services</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Custom choreography for music videos, performances, and special events.
                </p>
                <div className="text-xl sm:text-2xl font-bold text-pink-600 mb-3 sm:mb-4">$500+</div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-sm sm:text-base">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">My Work</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A glimpse into my world of fitness, fashion, and dance through professional photography and video content.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative group overflow-hidden rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Fitness Portfolio"
                width={300}
                height={400}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform group-hover:scale-110 drop-shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold">Fitness Campaign</h3>
                  <p className="text-xs sm:text-sm">Nike Collaboration</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Fashion Portfolio"
                width={300}
                height={400}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform group-hover:scale-110 drop-shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold">Fashion Week</h3>
                  <p className="text-xs sm:text-sm">Milan 2024</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Dance Portfolio"
                width={300}
                height={400}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform group-hover:scale-110 drop-shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold">Dance Performance</h3>
                  <p className="text-xs sm:text-sm">Contemporary Piece</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Client Transformation"
                width={300}
                height={400}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform group-hover:scale-110 drop-shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold">Client Success</h3>
                  <p className="text-xs sm:text-sm">12-Week Transformation</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Behind the Scenes"
                width={300}
                height={400}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform group-hover:scale-110 drop-shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold">Behind the Scenes</h3>
                  <p className="text-xs sm:text-sm">Adidas Campaign</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Choreography Work"
                width={300}
                height={400}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform group-hover:scale-110 drop-shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold">Music Video</h3>
                  <p className="text-xs sm:text-sm">Choreography Direction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Real stories from clients who've transformed their lives through fitness, gained confidence through
              modeling, and found joy through dance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  "Alex completely transformed my relationship with fitness. Her personalized approach and constant
                  motivation helped me lose 30 pounds and gain confidence I never knew I had."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah M."
                    width={40}
                    height={40}
                    className="rounded-full mr-3 drop-shadow-sm w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Sarah M.</div>
                    <div className="text-xs sm:text-sm text-gray-500">Fitness Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  "Working with Alex on my modeling portfolio was incredible. Her industry knowledge and professional
                  network opened doors I never thought possible."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Marcus T."
                    width={40}
                    height={40}
                    className="rounded-full mr-3 drop-shadow-sm w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Marcus T.</div>
                    <div className="text-xs sm:text-sm text-gray-500">Aspiring Model</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  "Alex's dance classes are pure magic. She creates such a supportive environment where everyone feels
                  free to express themselves and grow as dancers."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Emma L."
                    width={40}
                    height={40}
                    className="rounded-full mr-3 drop-shadow-sm w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Emma L.</div>
                    <div className="text-xs sm:text-sm text-gray-500">Dance Student</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Ready to start your transformation journey? Whether it's fitness, modeling, or dance, I'm here to help you
              achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 mr-3" />
                    <span className="text-sm sm:text-base text-gray-600">hello@alexfitness.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 mr-3" />
                    <span className="text-sm sm:text-base text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 mr-3" />
                    <span className="text-sm sm:text-base text-gray-600">Los Angeles, CA</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Follow My Journey</h3>
                <div className="flex space-x-3 sm:space-x-4">
                  <Link
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                  >
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                  >
                    <TikTok className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send Me a Message</h3>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <select className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm sm:text-base">
                      <option>Personal Training</option>
                      <option>Online Coaching</option>
                      <option>Dance Classes</option>
                      <option>Modeling Mentorship</option>
                      <option>Brand Collaboration</option>
                      <option>Choreography</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm sm:text-base resize-none"
                      placeholder="Tell me about your goals and how I can help..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 py-2 sm:py-3 text-sm sm:text-base">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">ALEX</div>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                Empowering individuals through fitness, fashion, and dance to live their most confident lives.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <TikTok className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Personal Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Online Coaching
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Dance Classes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Modeling Mentorship
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-400">
                <li>hello@alexfitness.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Los Angeles, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-400">
            <p>&copy; 2024 Alex Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
