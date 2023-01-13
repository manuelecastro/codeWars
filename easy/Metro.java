//Number of People in the Bus

import java.util.ArrayList;

class Metro {

  public static int countPassengers(ArrayList<int[]> stops) {
    int passengersLeft = 0;
    
     for (int[] stop : stops) {
       passengersLeft = passengersLeft + stop[0] - stop[1];
     }
    
    return passengersLeft;
  }
}
