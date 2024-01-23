<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $comments = array(
            "This is a great post!",
            "I completely agree with your point of view.",
            "Well written and very informative.",
            "I found this article very helpful. Thanks!",
            "Interesting perspective. I never thought about it that way.",
            "Your insights are always on point.",
            "I disagree with some points, but overall a good read.",
            "Thanks for sharing this valuable information.",
            "Can you elaborate more on the second point?",
            "I love the examples you provided.",
            "Your writing style is engaging.",
            "I wish there were more articles like this one.",
            "This topic is very relevant to me right now.",
            "I have a different opinion, but I respect yours.",
            "I'm looking forward to your next post.",
            "Great job breaking down complex concepts.",
            "The layout of the article is easy to follow.",
            "This is a must-read for everyone in the industry.",
            "I appreciate the effort you put into this.",
            "I've shared this with my friends; they loved it too!"
        );



        return [
            'user_id' => 10,
            'post_id' => 2,
            
            'comment' => $comments[rand(0, 19)],
        ];
    }
}
