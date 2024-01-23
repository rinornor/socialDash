<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

       

    // Array of 10 article titles
    $articleTitles = [
        "How to Get Started with PHP",
        "Building Dynamic Websites with Laravel",
        "Introduction to JavaScript Frameworks",
        "Mastering CSS Flexbox and Grid",
        "Securing Your Web Applications: Best Practices",
        "Exploring the World of Data Science",
        "The Art of Responsive Web Design",
        "Creating RESTful APIs with Express.js",
        "Getting Started with Python for Web Development",
        "Design Patterns in Object-Oriented Programming",
    ];

    // Array of corresponding article contents
    $articleContents = [
        "In this article, we'll explore the basics of PHP and how to get started with building dynamic web applications.",
        "Learn how to build powerful and scalable web applications using the Laravel framework.",
        "Discover the popular JavaScript frameworks such as React, Angular, and Vue.js and when to use them.",
        "Deep dive into the world of CSS Flexbox and Grid to create flexible and responsive layouts for your websites.",
        "Ensure the security of your web applications by following best practices and implementing security measures.",
        "An overview of data science and its applications, from data analysis to machine learning.",
        "Explore the principles of responsive web design and how to create websites that work seamlessly on all devices.",
        "Build RESTful APIs using Express.js, a popular Node.js framework, and learn about REST architecture.",
        "A guide to getting started with Python for web development, covering Flask, Django, and more.",
        "Understand the fundamental design patterns in object-oriented programming and how to apply them in your code.",
    ];

// Display
        $randomi = rand(0,9);

        return [
            'user_id' => rand(1, 10),
            'title' => $articleTitles[$randomi],
            'content' => $articleContents[$randomi],
        ];
    }
}
