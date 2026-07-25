
public class ForecastTest {
    public static void main(String[] args) {
        double initialValue = 1000.0;   // starting amount
        double growthRate = 0.05;       // 5% growth per year
        int years = 5;                  // forecast for 5 years

        double futureValue = FinancialForecast.predictFutureValue(initialValue, growthRate, years);

        System.out.println("Initial Value: " + initialValue);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.println("Predicted Future Value: " + futureValue);
    }
}
