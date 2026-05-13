package main

import (
	"fmt"
	"math"
)

func main() {
	a := 2.5
	b := 3.4
	alfa := 3.5

	x := [10]float64{-2.5, 3.4, 3.5, 6.5, 0.6, 2.89, 3.54, 5.21, 6.28, 3.48}
	var y [10]float64

	for i := 0; i < 10; i++ {
		if x[i] > 5 {
			L := math.Log10(a*a + x[i])
			y[i] = (L * L) / ((a + x[i]) * (a + x[i]))
		} else {
			ch := math.Pow(a+b, 3.5)
			zn := 1.8 + math.Pow(math.Cos(alfa), 3)
			y[i] = ch / zn
		}
	}

	fmt.Println("x          y")
	for i := 0; i < 10; i++ {
		fmt.Printf("%.2f     %.6f\n", x[i], y[i])
	}
}