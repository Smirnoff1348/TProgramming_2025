package main

import (
	"fmt"
	"math"
)

func main() {
	a := 2.5
	b := 3.4
	alpha := 3.5

	x := []float64{-2.5, 3.4, 3.5, 6.5, 0.6, 2.89, 3.54, 5.21, 6.28, 3.48}

	fmt.Println("x\ty")
	fmt.Println("---------")

	for i := 0; i < len(x); i++ {
		var y float64

		if x[i] > 5 {
			lg := math.Log10(a*a + x[i])
			y = (lg * lg) / ((a + x[i]) * (a + x[i]))
		} else {
			chisl := math.Pow(a+b, 3.5)
			znam := 1.8 + math.Pow(math.Cos(alpha), 3)
			y = chisl / znam
		}

		fmt.Printf("%.2f\t%.6f\n", x[i], y)
	}
}