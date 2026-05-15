package main

import "fmt"

type Computer struct {
	brand  string
	model  string
	hdSize int
}

func NewComputer(brand string, model string, hdSize int) Computer {
	return Computer{brand: brand, model: model, hdSize: hdSize}
}

func (c *Computer) SetSize(size int) {
	c.hdSize = size
}

func (c Computer) GetSize() int {
	return c.hdSize
}

func (c Computer) Print() {
	fmt.Println(c.brand, c.model, c.hdSize, "GB")
}

func main() {
	comp := NewComputer("Kraftway", "IC220", 512)
	comp.Print()

	comp.SetSize(1024)
	comp.Print()
}