export interface UserModel{
    _id?: string;
    name:       string ;
    email:      string ;
    phone:      number ;
    imageUrl:   string ;
    role:       string;
    password:   string ;
    favorite:   [] ;
    isActive:   boolean;
    isEnable:   boolean;
    lastSeen:   Date;
    createdAt:  Date;
}
