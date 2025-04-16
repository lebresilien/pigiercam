<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\{ News, Testimony, Student, Partner, Formation };

class WelcomeController extends Controller
{
    public function welcome() {

        $news = News::all();
        $testimonies = Testimony::all();
        $students = Student::all();
        $partners = Partner::all();
        $formations = Formation::all();

        return Inertia::render('welcome', [
            'news' => $news,
            'testimonies' => $testimonies,
            'students' => $students,
            'partners' => $partners,
            'formations' => $formations,
        ]);
    }
}
