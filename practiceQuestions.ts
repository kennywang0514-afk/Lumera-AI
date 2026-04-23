import { Question } from '@/types'

export const practiceQuestions: Question[] = [
  // ─── EASY ────────────────────────────────────────────────────────────────────
  {
    id: 'prac-e01',
    topic: 'Numbers & Numeration',
    difficulty: 'easy',
    question: 'Simplify: 2/3 × 3/4',
    options: ['1/2', '5/7', '6/7', '2/4'],
    correctIndex: 0,
    explanation: {
      directSolution:
        'Multiply numerators: 2 × 3 = 6. Multiply denominators: 3 × 4 = 12. Result = 6/12, which simplifies to 1/2.',
      conceptExplanation:
        'Multiplying fractions is straightforward: multiply the numerators together and the denominators together. You can also simplify before multiplying by cancelling common factors diagonally (cross-cancellation), which keeps the numbers smaller.',
      methodToRemember:
        'a/b × c/d = (a × c)/(b × d). Then simplify the result. Cross-cancel first to make the arithmetic easier: 2/3 × 3/4 → cancel the 3s → 2/1 × 1/4 = 2/4 = 1/2.',
      commonMistake:
        'Adding the denominators instead of multiplying them, treating fraction multiplication like addition. Fraction addition requires a common denominator; fraction multiplication does not.',
    },
  },
  {
    id: 'prac-e02',
    topic: 'Algebra',
    difficulty: 'easy',
    question: 'If x = 3, find the value of 2x² − 3x + 1.',
    options: ['8', '10', '12', '15'],
    correctIndex: 1,
    explanation: {
      directSolution:
        'Substitute x = 3: 2(3)² − 3(3) + 1 = 2(9) − 9 + 1 = 18 − 9 + 1 = 10.',
      conceptExplanation:
        'Substitution means replacing the variable with its given value and evaluating the resulting numerical expression. The expression 2x² − 3x + 1 is a quadratic polynomial. BODMAS/BODMAS governs evaluation order: Brackets, Orders (exponents), Division/Multiplication, then Addition/Subtraction.',
      methodToRemember:
        'Work in BODMAS order: (1) compute the exponent (3² = 9), (2) multiply all coefficients (2 × 9 = 18, 3 × 3 = 9), (3) perform addition and subtraction left to right. Never add before multiplying.',
      commonMistake:
        'Computing (2x)² instead of 2(x²) — misreading the order of operations. The coefficient 2 is multiplied after squaring, not before.',
    },
  },
  {
    id: 'prac-e03',
    topic: 'Statistics',
    difficulty: 'easy',
    question: 'Find the mean of the data: 4, 8, 6, 10, 2.',
    options: ['5', '6', '7', '8'],
    correctIndex: 1,
    explanation: {
      directSolution:
        'Sum = 4 + 8 + 6 + 10 + 2 = 30. Count = 5. Mean = 30 ÷ 5 = 6.',
      conceptExplanation:
        'The mean represents the central value if the total were shared equally among all observations. It is the most commonly used measure of central tendency and is sensitive to every value in the data set, including outliers.',
      methodToRemember:
        'Mean = (Sum of all values) ÷ (Number of values). Always count the number of terms carefully — a frequent source of errors is off-by-one counting.',
      commonMistake:
        'Dividing by the range (highest − lowest) rather than the count. The denominator in the mean formula is always the number of data points.',
    },
  },
  {
    id: 'prac-e04',
    topic: 'Numbers & Numeration',
    difficulty: 'easy',
    question: 'What is 25% of 80?',
    options: ['15', '20', '25', '30'],
    correctIndex: 1,
    explanation: {
      directSolution:
        '25% of 80 = (25/100) × 80 = 0.25 × 80 = 20.',
      conceptExplanation:
        '"Percent" literally means "per hundred." Finding a percentage of a quantity means multiplying the quantity by the fraction equivalent of that percentage. Recognising common percentage-fraction equivalents speeds up calculation.',
      methodToRemember:
        'Percentage of a value = (% ÷ 100) × value. Useful benchmarks: 50% = 1/2, 25% = 1/4, 10% = 1/10, 1% = 1/100. For 25% of any number, simply divide by 4.',
      commonMistake:
        'Adding 25 to 80 instead of multiplying. "25% of" always means multiply, not add.',
    },
  },
  {
    id: 'prac-e05',
    topic: 'Geometry',
    difficulty: 'easy',
    question: 'Two angles of a triangle measure 60° and 75°. What is the third angle?',
    options: ['35°', '45°', '55°', '65°'],
    correctIndex: 1,
    explanation: {
      directSolution:
        'The sum of angles in a triangle = 180°. Third angle = 180° − 60° − 75° = 45°.',
      conceptExplanation:
        'The interior angle sum property is one of the most fundamental theorems in Euclidean geometry: the three interior angles of any triangle always add up to exactly 180°. This holds true for acute, right, and obtuse triangles alike.',
      methodToRemember:
        'Third angle = 180° − (sum of the other two angles). For a right triangle, one angle is always 90°, so the other two must sum to 90° (they are complementary).',
      commonMistake:
        'Using 360° instead of 180°. The 360° rule applies to the exterior angles of a polygon or to a complete rotation, not to interior triangle angles.',
    },
  },

  // ─── MEDIUM ──────────────────────────────────────────────────────────────────
  {
    id: 'prac-m01',
    topic: 'Algebra',
    difficulty: 'medium',
    question: 'Solve: x² + 2x − 8 = 0',
    options: ['x = 2, x = −4', 'x = −2, x = 4', 'x = 2, x = 4', 'x = −2, x = −4'],
    correctIndex: 0,
    explanation: {
      directSolution:
        'Find two numbers that multiply to −8 and add to +2: those are +4 and −2. So x² + 2x − 8 = (x + 4)(x − 2) = 0. Solutions: x = −4 and x = 2.',
      conceptExplanation:
        'Factoring a quadratic works by reversing the FOIL expansion. You seek two binomials (x + p)(x + q) where p + q equals the coefficient of x, and p × q equals the constant term. The Zero Product Property then gives the roots: if a product equals zero, at least one factor must be zero.',
      methodToRemember:
        'For x² + bx + c = 0, find p and q such that p + q = b and p × q = c. The roots are −p and −q. If factoring is difficult, use the quadratic formula: x = (−b ± √(b² − 4ac)) / 2a.',
      commonMistake:
        'Confusing the factored form (x + 4)(x − 2) with the roots. The roots are the negatives of the numbers in the brackets: x + 4 = 0 gives x = −4 (not x = 4); x − 2 = 0 gives x = 2 (not x = −2).',
    },
  },
  {
    id: 'prac-m02',
    topic: 'Sequences & Series',
    difficulty: 'medium',
    question: 'The 5th term of an arithmetic progression is 22 and the 8th term is 34. Find the first term.',
    options: ['6', '8', '10', '12'],
    correctIndex: 0,
    explanation: {
      directSolution:
        'T₅ = a + 4d = 22 and T₈ = a + 7d = 34. Subtracting: 3d = 12 → d = 4. Substitute back: a + 4(4) = 22 → a = 22 − 16 = 6.',
      conceptExplanation:
        'In an AP, any two terms create a system of two equations in two unknowns (a and d). Subtracting the equations eliminates a and lets you solve for d first, then back-substitute to find a. This system-of-equations approach works whenever two terms and their positions are known.',
      methodToRemember:
        'Set up Tₙ = a + (n−1)d for each known term. Subtract to eliminate a (or d). Solve for one unknown, then the other. Always verify by checking one of the original conditions.',
      commonMistake:
        'Writing T₅ = a + 5d instead of a + 4d. The coefficient of d is always (n − 1), not n, because the first term requires no "steps."',
    },
  },
  {
    id: 'prac-m03',
    topic: 'Statistics',
    difficulty: 'medium',
    question: 'A frequency table shows: Score 2 (frequency 3), Score 4 (frequency 5), Score 6 (frequency 2). Find the mean score.',
    options: ['3.2', '3.6', '3.8', '4.0'],
    correctIndex: 2,
    explanation: {
      directSolution:
        'Sum of (score × frequency): (2 × 3) + (4 × 5) + (6 × 2) = 6 + 20 + 12 = 38. Total frequency = 3 + 5 + 2 = 10. Mean = 38 ÷ 10 = 3.8.',
      conceptExplanation:
        'When data is grouped in a frequency table, each score must be "weighted" by how many times it occurs. This is called the weighted mean. Simply averaging the scores (2, 4, 6) ignores how common each one is and will give the wrong answer.',
      methodToRemember:
        'Mean from frequency table = Σ(x × f) ÷ Σf, where x is the score and f is its frequency. Always use the sum of all frequencies in the denominator, not just the number of distinct scores.',
      commonMistake:
        'Calculating (2 + 4 + 6) ÷ 3 = 4. This ignores frequencies entirely. You must weight each score by how often it appears.',
    },
  },
  {
    id: 'prac-m04',
    topic: 'Indices & Surds',
    difficulty: 'medium',
    question: 'Simplify: (2⁵ × 2³) ÷ 2⁶',
    options: ['2', '4', '8', '16'],
    correctIndex: 1,
    explanation: {
      directSolution:
        '2⁵ × 2³ = 2^(5+3) = 2⁸. Then 2⁸ ÷ 2⁶ = 2^(8−6) = 2² = 4.',
      conceptExplanation:
        'The laws of indices provide systematic rules for combining exponential expressions with the same base. These laws are derived from the fundamental definition of exponentiation as repeated multiplication.',
      methodToRemember:
        'When multiplying: add exponents. When dividing: subtract exponents. When raising a power to a power: multiply exponents. These laws only apply when the base is the same in all terms.',
      commonMistake:
        'Multiplying the exponents for multiplication (2⁵ × 2³ ≠ 2¹⁵). Multiplying exponents is the rule for a power of a power: (2⁵)³ = 2¹⁵.',
    },
  },
  {
    id: 'prac-m05',
    topic: 'Geometry',
    difficulty: 'medium',
    question: 'If the radius of a circle is 7 cm, find its area. (Use π = 22/7)',
    options: ['44 cm²', '88 cm²', '154 cm²', '176 cm²'],
    correctIndex: 2,
    explanation: {
      directSolution:
        'Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm².',
      conceptExplanation:
        'The area of a circle measures the amount of surface enclosed within the circumference. It increases with the square of the radius, meaning doubling the radius quadruples the area. The constant π (approximately 3.14159) represents the ratio of a circle\'s circumference to its diameter.',
      methodToRemember:
        'Area = πr². Circumference = 2πr = πd. In JAMB, π is often taken as 22/7 to avoid decimals when the radius is a multiple of 7.',
      commonMistake:
        'Using the circumference formula πd (or 2πr) for area. Area requires squaring the radius; circumference does not. These are completely different measurements.',
    },
  },
  {
    id: 'prac-m06',
    topic: 'Algebra',
    difficulty: 'medium',
    question: 'If 2x + y = 7 and x − y = 2, find x.',
    options: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanation: {
      directSolution:
        'Add the two equations: (2x + y) + (x − y) = 7 + 2 → 3x = 9 → x = 3.',
      conceptExplanation:
        'Simultaneous equations are two equations with two unknowns, and the solution is the pair of values satisfying both equations simultaneously. The elimination method adds or subtracts equations to cancel one variable, turning two equations with two unknowns into one equation with one unknown.',
      methodToRemember:
        'Elimination: arrange equations to eliminate one variable by adding or subtracting. Substitution: solve one equation for one variable, then substitute into the other. For JAMB, elimination is usually faster when coefficients align nicely.',
      commonMistake:
        'Solving only one of the two equations. A simultaneous system requires both equations to be satisfied; using only one gives infinitely many solutions.',
    },
  },
  {
    id: 'prac-m07',
    topic: 'Numbers & Numeration',
    difficulty: 'medium',
    question: 'Divide 240 in the ratio 3 : 5. What is the larger share?',
    options: ['80', '90', '120', '150'],
    correctIndex: 3,
    explanation: {
      directSolution:
        'Total parts = 3 + 5 = 8. Each part = 240 ÷ 8 = 30. Larger share = 5 × 30 = 150.',
      conceptExplanation:
        'A ratio describes how a quantity is divided proportionally. To divide a quantity in a ratio, first find the total number of parts, then calculate the value of one part, and finally multiply by the number of parts for each share.',
      methodToRemember:
        'Share = (ratio part ÷ total ratio sum) × total quantity. Always identify which share is being asked for. Verify by checking that the shares add up to the original total.',
      commonMistake:
        'Dividing 240 by one of the ratio numbers directly. 240 ÷ 3 and 240 ÷ 5 are not the shares — they ignore the other portion entirely.',
    },
  },
  {
    id: 'prac-m08',
    topic: 'Trigonometry',
    difficulty: 'medium',
    question: 'In a right-angled triangle, if tan θ = 1, what is the value of sin θ + cos θ?',
    options: ['1', '√2', '2', '2√2'],
    correctIndex: 1,
    explanation: {
      directSolution:
        'tan θ = 1 means θ = 45°. At 45°: sin 45° = 1/√2 and cos 45° = 1/√2. Therefore sin 45° + cos 45° = 1/√2 + 1/√2 = 2/√2 = √2.',
      conceptExplanation:
        'When tan θ = opposite/adjacent = 1, both sides are equal, meaning the angle is 45°. A 45-45-90 triangle has sides in the ratio 1 : 1 : √2. The exact values of sin, cos, and tan for common angles (30°, 45°, 60°) are essential JAMB knowledge.',
      methodToRemember:
        'Key exact values: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3. sin 45° = cos 45° = 1/√2, tan 45° = 1. sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.',
      commonMistake:
        'Assuming sin θ + cos θ equals tan θ or 1. These three ratios have independent definitions and do not add up in a simple way (except at special angles).',
    },
  },
  {
    id: 'prac-m09',
    topic: 'Statistics',
    difficulty: 'medium',
    question: 'Find the median of: 12, 7, 3, 8, 5, 10, 15',
    options: ['7', '8', '10', '12'],
    correctIndex: 1,
    explanation: {
      directSolution:
        'Sort in ascending order: 3, 5, 7, 8, 10, 12, 15. There are 7 values, so the median is the 4th value = 8.',
      conceptExplanation:
        'The median is the middle value that divides a sorted data set into two equal halves. For an odd number of values n, the median is at position (n + 1)/2. For an even number of values n, the median is the mean of the two middle values at positions n/2 and (n/2) + 1.',
      methodToRemember:
        'Step 1: Always sort the data first. Step 2: Count the values (n). Step 3: If n is odd, median = value at position (n+1)/2. If n is even, median = average of values at positions n/2 and n/2 + 1.',
      commonMistake:
        'Finding the median without sorting first. The position of the middle term depends entirely on the order; an unsorted data set gives a meaningless middle value.',
    },
  },
  {
    id: 'prac-m10',
    topic: 'Sequences & Series',
    difficulty: 'medium',
    question: 'In a geometric progression, the first term is 3 and the common ratio is 2. Find the 5th term.',
    options: ['24', '36', '48', '96'],
    correctIndex: 2,
    explanation: {
      directSolution:
        'Tₙ = arⁿ⁻¹. T₅ = 3 × 2⁴ = 3 × 16 = 48.',
      conceptExplanation:
        'A geometric progression (GP) is a sequence where each term is obtained by multiplying the previous term by a fixed value called the common ratio (r). Unlike an AP which grows linearly, a GP grows exponentially. The common ratio is found by dividing any term by the preceding term.',
      methodToRemember:
        'nth term of a GP: Tₙ = arⁿ⁻¹, where a = first term, r = common ratio. Sum of n terms: Sₙ = a(rⁿ − 1)/(r − 1) for r ≠ 1. Find r by dividing: r = T₂ ÷ T₁.',
      commonMistake:
        'Using Tₙ = arⁿ (without the −1). This overestimates by one multiple of r. The first term is a = ar⁰ = ar^(1−1), confirming that exponent is (n−1).',
    },
  },

  // ─── HARD ────────────────────────────────────────────────────────────────────
  {
    id: 'prac-h01',
    topic: 'Algebra',
    difficulty: 'hard',
    question: 'Express x² − 6x + 11 in the form (x − a)² + b. What is the minimum value of the expression?',
    options: ['Minimum value is 1', 'Minimum value is 2', 'Minimum value is 3', 'Minimum value is 4'],
    correctIndex: 1,
    explanation: {
      directSolution:
        'Complete the square: x² − 6x + 11 = (x − 3)² − 9 + 11 = (x − 3)² + 2. The minimum occurs when (x − 3)² = 0, giving a minimum value of 2 (at x = 3).',
      conceptExplanation:
        'Completing the square transforms a quadratic into vertex form (x − h)² + k, where (h, k) is the vertex of the parabola. Since (x − h)² ≥ 0 for all real x, the minimum value of the expression is k (when x = h). This technique is fundamental to understanding the geometry of quadratics.',
      methodToRemember:
        'For x² + bx + c: take half the coefficient of x, square it, add and subtract it. x² + bx + c = (x + b/2)² − (b/2)² + c. The minimum value is c − (b/2)², occurring at x = −b/2.',
      commonMistake:
        'Forgetting to subtract the square after adding it. Adding (b/2)² inside the bracket changes the expression, so it must be subtracted outside to compensate and preserve equality.',
    },
  },
  {
    id: 'prac-h02',
    topic: 'Algebra',
    difficulty: 'hard',
    question: 'If y = 3x² − 4x + 5, find dy/dx when x = 2.',
    options: ['4', '6', '8', '10'],
    correctIndex: 2,
    explanation: {
      directSolution:
        'Differentiate term by term: dy/dx = 6x − 4. At x = 2: dy/dx = 6(2) − 4 = 12 − 4 = 8.',
      conceptExplanation:
        'Differentiation measures the instantaneous rate of change of a function. The power rule states that d/dx(xⁿ) = nxⁿ⁻¹: bring down the exponent as a coefficient and reduce the exponent by 1. For constants, the derivative is zero (constants do not change). The result dy/dx at a specific x gives the gradient of the curve at that point.',
      methodToRemember:
        'Power rule: d/dx(axⁿ) = naxⁿ⁻¹. For a polynomial, differentiate each term separately. d/dx(constant) = 0. To find the gradient at a point, substitute the x value after differentiating.',
      commonMistake:
        'Substituting x = 2 into the original function y instead of into dy/dx. The value of y at x = 2 is the height of the curve; the gradient at x = 2 requires the derivative.',
    },
  },
  {
    id: 'prac-h03',
    topic: 'Statistics',
    difficulty: 'hard',
    question: 'A bag contains 4 red and 6 blue balls. Two balls are drawn at random without replacement. What is the probability that both are red?',
    options: ['2/15', '4/25', '1/5', '2/9'],
    correctIndex: 0,
    explanation: {
      directSolution:
        'P(first red) = 4/10 = 2/5. After removing one red, P(second red) = 3/9 = 1/3. P(both red) = 2/5 × 1/3 = 2/15.',
      conceptExplanation:
        'Without replacement means the outcome of the first draw changes the sample space for the second. This is called dependent probability. The combined probability of two dependent events A and B is P(A) × P(B|A), where P(B|A) is the conditional probability of B given A has occurred.',
      methodToRemember:
        'For "without replacement" problems: after each draw, reduce both the count of the specific item and the total count. Multiply the probabilities of each sequential event. For "with replacement," the probabilities remain the same at each draw.',
      commonMistake:
        'Using P = 4/10 × 4/10 = 16/100 as if replacing the ball. Without replacement, the second draw has only 9 balls remaining, not 10, and only 3 red balls remain, not 4.',
    },
  },
  {
    id: 'prac-h04',
    topic: 'Trigonometry',
    difficulty: 'hard',
    question: 'Find the exact value of: sin 60° + cos 30° − tan 45°',
    options: ['√3 − 1', '1', '√3', '2 − √3'],
    correctIndex: 0,
    explanation: {
      directSolution:
        'sin 60° = √3/2, cos 30° = √3/2, tan 45° = 1. Therefore: √3/2 + √3/2 − 1 = 2(√3/2) − 1 = √3 − 1.',
      conceptExplanation:
        'Exact trigonometric values for special angles are derived from equilateral and isosceles right triangles. For a 30-60-90 triangle (from half an equilateral triangle with side 2): sides are 1, √3, 2. For a 45-45-90 triangle: sides are 1, 1, √2. Memorising these eliminates the need for a calculator and is essential for JAMB.',
      methodToRemember:
        'Standard values table: sin/cos/tan for 0°, 30°, 45°, 60°, 90°. Key relations: sin θ = cos(90° − θ), so sin 60° = cos 30°. They are complementary angles — which is why they share the same value (√3/2).',
      commonMistake:
        'Computing sin 60° + cos 30° as 2 × sin 60°, which is correct, but then confusing tan 45° = 1 with tan 45° = 45. tan 45° = 1 exactly; it is not the angle itself.',
    },
  },
  {
    id: 'prac-h05',
    topic: 'Sequences & Series',
    difficulty: 'hard',
    question: 'Find the sum of the first 20 terms of the arithmetic progression: 1, 3, 5, 7, ...',
    options: ['200', '360', '400', '420'],
    correctIndex: 2,
    explanation: {
      directSolution:
        'a = 1, d = 2, n = 20. Using Sₙ = n/2 × [2a + (n−1)d]: S₂₀ = 20/2 × [2(1) + (20−1)(2)] = 10 × [2 + 38] = 10 × 40 = 400.',
      conceptExplanation:
        'The sum of an AP formula is derived by pairing the first and last terms: S = n × (first + last)/2. This works because pairing terms from opposite ends always gives the same sum. The sequence 1, 3, 5, 7, ... consists of consecutive odd numbers, and their sum from 1 to the nth odd number equals n²; for n = 20, this confirms 20² = 400.',
      methodToRemember:
        'Two equivalent formulas: Sₙ = n/2 × (first + last) or Sₙ = n/2 × [2a + (n−1)d]. The first is simpler if you know the last term; the second works directly from a and d. Always identify n, a, and d before applying.',
      commonMistake:
        'Using the nth term formula Tₙ = a + (n−1)d instead of the sum formula. Tₙ gives one specific term; Sₙ gives the cumulative total. These are different results and different formulas.',
    },
  },
]
