package org.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator(); // Arrange
        System.out.println("Setup: Calculator object created");
    }

    @After
    public void tearDown() {
        calc = null; // Cleanup
        System.out.println("Teardown: Calculator object destroyed");
    }

    @Test
    public void testAdd() {
        // Act
        int result = calc.add(2, 3);
        // Assert
        assertEquals("Sum should be 5", 5, result);
    }

    @Test
    public void testSubtract() {
        int result = calc.subtract(5, 3);
        assertEquals("Difference should be 2", 2, result);
    }

    @Test
    public void testMultiply() {
        int result = calc.multiply(4, 3);
        assertEquals("Product should be 12", 12, result);
    }

    @Test
    public void testDivide() {
        int result = calc.divide(10, 2);
        assertEquals("Quotient should be 5", 5, result);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        calc.divide(10, 0); // should throw exception
    }
}