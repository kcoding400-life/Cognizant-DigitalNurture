
public class SingletonTest {
    public static void main(String[] args) {
        // Get logger instances
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Test logging
        logger1.log("First log message");
        logger2.log("Second log message");

        // Verify both references point to the same object
        if (logger1 == logger2) {
            System.out.println("Both logger1 and logger2 are the same instance.");
        } else {
            System.out.println("Different instances exist (Singleton failed).");
        }
    }
}