
public class FinancialForecast {

    // Recursive method to calculate future value
    public static double predictFutureValue(double currentValue, double growthRate, int years) {
        // Base case: if no years left, return current value
        if (years == 0) {
            return currentValue;
        }
        // Recursive case: apply growth rate and reduce years
        double nextValue = currentValue * (1 + growthRate);
        return predictFutureValue(nextValue, growthRate, years - 1);
    }
}
