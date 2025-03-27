import java.util.*;
import java.math.*;

class Solution {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        if (sc.hasNextLine()) {
            sc.nextLine();
        }
        for (int i = 0; i < N; i++) {
            String x = sc.nextLine();
            System.out.printf("%s %s\n", x, isHappy(new BigInteger(x)) ? ":)" : ":(");
        }

        sc.close();
    }

    private static boolean isHappy(BigInteger num) {
        Set<BigInteger> seen = new HashSet<>();
        while (!num.equals(BigInteger.ONE) && seen.add(num)) {
            if (compare(num, 2, 4, 6, 9)) {
                return false;
            }

            BigInteger sum = BigInteger.ZERO;
            while (num.compareTo(BigInteger.ZERO) > 0) {
                BigInteger[] divmod = num.divideAndRemainder(BigInteger.TEN);
                sum = sum.add(divmod[1].pow(2));
                num = divmod[0];
            }
            num = sum;
        }

        return num.equals(BigInteger.ONE);
    }

    private static BigInteger bigInt(int value) {
        return BigInteger.valueOf(value);
    }

    private static boolean compare(BigInteger number, int... values) {
        for (int value : values) {
            if (number.equals(bigInt(value))) {
                return true;
            }
        }
        return false;
    }
}