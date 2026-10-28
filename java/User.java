public class User {

    private String username;
    private String email;
    private String password;

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User() {
    }

    public void SetUsername(String username) {
        this.username = username;
    }

    public String GetUsername() {
        return this.username;
    }

}