public class OptimizedForecast {
    public static double predictFutureValue(double currentValue, double growthRate, int years) {
        return currentValue * Math.pow(1 + growthRate, years);
    }
}
