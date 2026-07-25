package org.example;
import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testEquals() {
        // Assert equals
        assertEquals("Sum should be 5", 5, 2 + 3);
    }

    @Test
    public void testTrueFalse() {
        // Assert true
        assertTrue("5 should be greater than 3", 5 > 3);

        // Assert false
        assertFalse("5 should not be less than 3", 5 < 3);
    }

    @Test
    public void testNullChecks() {
        // Assert null
        String str = null;
        assertNull("String should be null", str);

        // Assert not null
        Object obj = new Object();
        assertNotNull("Object should not be null", obj);
    }

    @Test
    public void testSameReference() {
        // Assert same
        Object obj1 = new Object();
        Object obj2 = obj1;
        assertSame("Both references should point to the same object", obj1, obj2);

        // Assert not same
        Object obj3 = new Object();
        assertNotSame("References should not point to the same object", obj1, obj3);
    }
}
