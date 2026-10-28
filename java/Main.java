public class Main {

    public static void main(String args[]) {
        User usuario = new User();
        usuario.SetUsername("Jorge Bueno");
        System.out.print("Ola Mundo " + usuario.GetUsername());
    }
}