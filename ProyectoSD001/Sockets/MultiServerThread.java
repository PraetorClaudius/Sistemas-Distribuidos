import java.net.*;
import java.io.*;
import java.util.Date;

public class MultiServerThread extends Thread {
   private Socket socket = null;

   public MultiServerThread(Socket socket) {
      super("MultiServerThread");
      this.socket = socket;
      ServerMultiClient.NoClients++;
      System.out.println("After Init");
   }

   public void run() {

      try {
         PrintWriter escritor = new PrintWriter(socket.getOutputStream(), true);
         BufferedReader entrada = new BufferedReader(new InputStreamReader(socket.getInputStream()));
         String lineIn, lineOut;

	       while((lineIn = entrada.readLine()) != null){
            System.out.println("Received: "+lineIn);
            escritor.flush();
            if(lineIn.equals("FIN")){
               ServerMultiClient.NoClients--;
			         break;
			      }else if(lineIn.equals("CUANTOS")){
              escritor.println("NC: "+ServerMultiClient.NoClients);
              escritor.flush();
            }else{
               escritor.println("Echo... "+lineIn);
               escritor.flush();
            }
         }
         try{
            entrada.close();
            escritor.close();
            socket.close();
         }catch(Exception e){
            System.out.println ("Error : " + e.toString());
            socket.close();
            System.exit (0);
   	   }
      }catch (IOException e) {
        System.out.println("Error---");
         e.printStackTrace();
      }
   }
}
