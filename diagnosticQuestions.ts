import { Question } from '@/types'

export const diagnosticQuestions: Question[] = [
  {
    id: 'diag-01',
    topic: 'Statistics',
    difficulty: 'medium',
    question: 'The mean of 5 numbers is 12. If four of the numbers are 8, 15, 10, and 14, what is the fifth number?',
    options: ['11', '13', '15', '17'],
    correctIndex: 1,
    explanation: {
      directSolution:
        'The sum of all 5 numbers = mean × count = 12 × 5 = 60. The sum of the four known numbers = 8 + 15 + 10 + 14 = 47. Therefore the fifth number = 60 − 47 = 13.',
      conceptExplanation:
        'The mean (arithmetic mean) is the "fair share" value — what each number would be if the total were redistributed equally. It is calculated by summing all values and dividing by the count. Because we know the mean and the count, we can always recover the total sum, and from there determine any single missing value.',
      methodToRemember:
        'When the mean and count are given, use: Total Sum = Mean × Count. Then subtract the known values to find the unknown.',
      commonMistake:
        'Students often try to find the average of only the four known numbers. That only works if you want the mean of those four — not the full set of five.',
    },
  },
  {
    id: 'diag-02',
    topic: 'Algebra',
    difficulty: 'medium',
    question: 'Solve for x: x² − 5x + 6 = 0',
    options: ['x = 1 and x = 6', 'x = 2 and x = 3', 'x = −2 and x = −3', 'x = 1 and x = 5'],
    correctIndex: 1,
    explanation: {
      directSolution:
        'Factor the quadratic: x² − 5x + 6 = (x − 2)(x − 3) = 0. Setting each factor to zero gives x − 2 = 0 → x = 2, and x − 3 = 0 → x = 3.',
      conceptExplanation:
        'A quadratic equation is a polynomial of degree 2. Factoring reverses the expansion of two binomials. We look for two numbers that multiply to the constant term (+6) and add to the coefficient of x (−5). Those numbers are −2 and −3, giving the factors (x − 2)(x − 3).',
      methodToRemember:
        'For ax² + bx + c = 0, find two numbers p and q such that p × q = c and p + q = b. Then write (x − p)(x − q) = 0. Alternatively, use the quadratic formula: x = (−b ± √(b² − 4ac)) / 2a.',
      commonMistake:
        'Watch the signs. Students frequently write −2 and −3 as the roots because those are the numbers used in factoring. The actual roots are +2 and +3 — the factors are (x − 2) and (x − 3), so x must equal +2 and +3.',
    },
  },
  {
    id: 'diag-03',
    topic: 'Numbers & Numeration',
    difficulty: 'medium',
    question: 'Evaluate: 3/4 + 2/3 − 1/2',
    options: ['11/12', '5/6', '7/12', '3/4'],
    correctIndex: 0,
    explanation: {
      directSolution:
        'Find the LCD of 4, 3, and 2, which is 12. Convert: 3/4 = 9/12, 2/3 = 8/12, 1/2 = 6/12. Now compute: 9/12 + 8/12 − 6/12 = 11/12.',
      conceptExplanation:
        'Fractions can only be directly added or subtracted when they share a common denominator. The Least Common Denominator (LCD) is the smallest number divisible by all the denominators involved. Converting each fraction to an equivalent fraction with the LCD allows straightforward arithmetic on the numerators.',
      methodToRemember:
        'Step 1: Find LCD of all denominators. Step 2: Convert every fraction by multiplying numerator and denominator by (LCD ÷ original denominator). Step 3: Perform the arithmetic on the numerators. Step 4: Simplify the result if possible.',
      commonMistake:
        'Never add or subtract the numerators and denominators separately. 3/4 + 2/3 ≠ 5/7. Denominators must be equalised first.',
    },
  },
  {
    id: 'diag-04',
    topic: 'Indices & Surds',
    difficulty: 'medium',
    question: 'Simplify: 2³ × 2⁴ ÷ 2⁵',
    options: ['2', '4', '8', '16'],
    correctIndex: 1,
    explanation: {
      directSolution:
        'Apply the laws of indices: 2³ × 2⁴ = 2^(3+4) = 2⁷. Then 2⁷ ÷ 2⁵ = 2^(7−5) = 2² = 4.',
      conceptExplanation:
        'An index (exponent) tells you how many times to multiply the base by itself. The laws of indices are shortcuts for combining these operations. Multiplication with the same base means you add exponents; division means you subtract exponents.',
      methodToRemember:
        'Core laws: aᵐ × aⁿ = a^(m+n) | aᵐ ÷ aⁿ = a^(m−n) | (aᵐ)ⁿ = a^(mn) | a⁰ = 1 | a^(−n) = 1/aⁿ. These only work when the bases are identical.',
      commonMistake:
        'Multiplying the exponents instead of adding them. 2³ × 2⁴ ≠ 2¹² — that would be the rule for (2³)⁴ (a power of a power).',
    },
  },
  {
    id: 'diag-05',
    topic: 'Geometry',
    difficulty: 'medium',
    question: 'The angles of a triangle are in the ratio 2 : 3 : 4. Find the largest angle.',
    options: ['60°', '72°', '80°', '90°'],
    correctIndex: 2,
    explanation: {
      directSolution:
        'Let the angles be 2x, 3x, and 4x. The angles of a triangle sum to 180°, so 2x + 3x + 4x = 180° → 9x = 180° → x = 20°. The largest angle = 4x = 4 × 20° = 80°.',
      conceptExplanation:
        'The interior angles of any triangle always sum to exactly 180°. When angles are given as a ratio, treat each part as a multiple of an unknown x. The ratio tells you the relative sizes, and the 180° constraint lets you solve for x.',
      methodToRemember:
        'For any ratio a : b : c forming triangle angles: (a + b + c) × x = 180°, so x = 180° / (a + b + c). Multiply each ratio part by x to get the actual angles.',
      commonMistake:
        'Treating the ratio numbers directly as degree values. A ratio of 2 : 3 : 4 does not mean 2°, 3°, and 4°. The ratio describes proportion, not magnitude.',
    },
  },
  {
    id: 'diag-06',
    topic: 'Sequences & Series',
    difficulty: 'medium',
    question: 'Find the 10th term of the arithmetic progression: 3, 7, 11, 15, ...',
    options: ['39', '41', '43', '45'],
    correctIndex: 0,
    explanation: {
      directSolution:
        'First term a = 3, common difference d = 7 − 3 = 4. Using Tₙ = a + (n−1)d: T₁₀ = 3 + (10−1) × 4 = 3 + 36 = 39.',
      conceptExplanation:
        'An arithmetic progression (AP) is a sequence where consecutive terms differ by a fixed amount called the common difference (d). The nth term formula allows you to jump directly to any term without listing all terms in between. The first term a anchors the sequence, and d controls how fast it grows.',
      methodToRemember:
        'Tₙ = a + (n − 1)d, where a = first term, d = common difference, n = term number. Always compute d by subtracting any term from the next: d = T₂ − T₁.',
      commonMistake:
        'Using n instead of (n − 1) in the formula. T₁₀ = a + 10d is wrong — this would give the 11th term. The first term already accounts for one term, so the difference is only added (n − 1) times.',
    },
  },
  {
    id: 'diag-07',
    topic: 'Algebra',
    difficulty: 'easy',
    question: 'If 3x − 4 = 2x + 7, find the value of x.',
    options: ['3', '7', '11', '13'],
    correctIndex: 2,
    explanation: {
      directSolution:
        'Collect like terms: 3x − 2x = 7 + 4 → x = 11.',
      conceptExplanation:
        'A linear equation has one variable raised to the power of 1. Solving it means isolating the variable on one side. This is done by performing the same operation on both sides of the equation — adding, subtracting, multiplying, or dividing.',
      methodToRemember:
        'Move all terms containing the variable to the left side and all constant terms to the right side. What you do to one side, you must do to the other. Always check your answer by substituting back into the original equation.',
      commonMistake:
        'Forgetting to change signs when moving terms across the equals sign. −4 becomes +4 when moved to the right side; +7 becomes −7 if moved to the left.',
    },
  },
  {
    id: 'diag-08',
    topic: 'Numbers & Numeration',
    difficulty: 'easy',
    question: 'A student scored 72 out of 90 marks. What percentage did the student score?',
    options: ['78%', '80%', '82%', '84%'],
    correctIndex: 1,
    explanation: {
      directSolution:
        '(72 ÷ 90) × 100 = 0.8 × 100 = 80%.',
      conceptExplanation:
        'A percentage expresses a value as a fraction of 100. To convert a fraction or ratio to a percentage, divide the part by the whole and multiply by 100. Percentages make it easy to compare results on different scales.',
      methodToRemember:
        'Percentage = (Part ÷ Whole) × 100. If you need to find the part from a percentage: Part = (Percentage ÷ 100) × Whole. These two formulas cover most percentage problems.',
      commonMistake:
        'Dividing 90 by 72 instead of 72 by 90. Always divide the score (part) by the total possible (whole), not the other way around.',
    },
  },
  {
    id: 'diag-09',
    topic: 'Trigonometry',
    difficulty: 'medium',
    question: 'In a right-angled triangle, if sin θ = 3/5, find the value of cos θ.',
    options: ['3/4', '4/5', '5/4', '4/3'],
    correctIndex: 1,
    explanation: {
      directSolution:
        'If sin θ = opposite/hypotenuse = 3/5, then opposite = 3 and hypotenuse = 5. By the Pythagorean theorem: adjacent = √(5² − 3²) = √(25 − 9) = √16 = 4. Therefore cos θ = adjacent/hypotenuse = 4/5.',
      conceptExplanation:
        'SOHCAHTOA: Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent. In any right triangle, these three sides are related by the Pythagorean theorem (a² + b² = c²). Knowing any one trig ratio lets you find the others by recovering the missing side.',
      methodToRemember:
        'Use sin²θ + cos²θ = 1 as a quick shortcut: if sin θ = 3/5, then cos²θ = 1 − (3/5)² = 1 − 9/25 = 16/25, so cos θ = 4/5. This identity works for any angle.',
      commonMistake:
        'Writing cos θ = 3/4. This incorrectly uses opposite/adjacent, which is the tangent ratio. Always clearly identify which sides are opposite, adjacent, and hypotenuse relative to the angle θ.',
    },
  },
  {
    id: 'diag-10',
    topic: 'Statistics',
    difficulty: 'easy',
    question: 'Find the mode of the data set: 3, 7, 5, 3, 8, 3, 5, 7, 3, 9',
    options: ['5', '7', '3', '9'],
    correctIndex: 2,
    explanation: {
      directSolution:
        'Count each value: 3 appears 4 times, 5 appears 2 times, 7 appears 2 times, 8 appears 1 time, 9 appears 1 time. The value with the highest frequency is 3, so the mode is 3.',
      conceptExplanation:
        'The mode is the value that appears most frequently in a data set. A data set can have one mode (unimodal), two modes (bimodal), or more (multimodal). If all values appear with equal frequency, the data set has no mode. The mode is particularly useful for categorical data or when you want to know the most common observation.',
      methodToRemember:
        'Create a tally or frequency table for all values, then identify which value(s) have the highest count. Unlike mean and median, the mode is not affected by extreme values (outliers).',
      commonMistake:
        'Confusing the mode with the median. The median is the middle value when data is sorted; the mode is the most frequent value. These are different measures and usually give different answers.',
    },
  },
]
