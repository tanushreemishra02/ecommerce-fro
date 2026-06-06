import React from 'react'

export default function About() {
  return (
 <section className="about">

    <div className="about-header">
        <h1>About ShopSphere</h1>
        <p>Your one-stop destination for trendy and affordable shopping.</p>
    </div>

    <div className="about-content">

        <h2>Who We Are</h2>
        <p>
            ShopSphere is a modern e-commerce platform dedicated to bringing
            customers the best online shopping experience. From fashion and
            electronics to home essentials and beauty products, we offer
            everything you need in one place.
        </p>

        <h2>Our Story</h2>
        <p>
            Founded in 2022, ShopSphere started with a simple goal —
            to make online shopping easy, reliable, and budget-friendly.
            Today, we proudly serve thousands of happy customers across India.
        </p>

        <h2>Why Customers Love Us</h2>

        <ul>
            <li>High-quality products</li>
            <li>Affordable pricing</li>
            <li>Fast and secure delivery</li>
            <li>Easy return policy</li>
            <li>24/7 customer support</li>
        </ul>

        <h2>Our Achievements</h2>

        <div className="stats">

            <div class="stat-box">
                <h3>100K+</h3>
                <p>Happy Customers</p>
            </div>

            <div class="stat-box">
                <h3>25K+</h3>
                <p>Products Available</p>
            </div>

            <div class="stat-box">
                <h3>500+</h3>
                <p>Trusted Sellers</p>
            </div>

        </div>

        <h2>Meet Our Team</h2>

        <div className="team">

            <div class="member">
                <h3>Rohan Mehta</h3>
                <p>Founder & CEO</p>
            </div>

            <div class="member">
                <h3>Ananya Roy</h3>
                <p>Creative Director</p>
            </div>

            <div class="member">
                <h3>Vikram Singh</h3>
                <p>Technical Lead</p>
            </div>

        </div>

        <h2>Contact Us</h2>

        <p>Email: support@shopsphere.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: Kolkata, West Bengal, India</p>

    </div>

</section>
  )
}
