import java.util.Arrays;

public class SearchTest {
    public static void main(String[] args) {
        // Create product array
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Book", "Education"),
                new Product(105, "Watch", "Accessories")
        };

        // Linear Search
        Product result1 = SearchAlgorithms.linearSearch(products, 103);
        System.out.println("Linear Search Result: " + result1);

        // Sort products by productId for Binary Search
        Arrays.sort(products, (p1, p2) -> Integer.compare(p1.getProductId(), p2.getProductId()));

        // Binary Search
        Product result2 = SearchAlgorithms.binarySearch(products, 103);
        System.out.println("Binary Search Result: " + result2);
    }
}
