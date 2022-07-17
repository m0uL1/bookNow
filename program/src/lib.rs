use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
use anchor_spl::token::{self, Token};
use std::mem::size_of;
use anchor_lang::solana_program::log::{
    sol_log_compute_units
};

declare_id!("J3ZVazZkTDAneQ7D2Wc1ecnbfmecT1dEkGjhwbKrRrQr");

const NAME_LENGTH: usize = 100;

#[program]
mod book_now {
    use super::*;
    pub fn create_account(ctx: Context<CreateAccount>,
                          name: String, 
                          address : String,
                          photo: String
                         ) -> ProgramResult {

        if name.trim().is_empty() || address.trim().is_empty() {
           msg!(" not able to create user with these inputs ");
           return Ok(())
        };
        
        let user = &mut ctx.accounts.user;
        user.wallet_address = ctx.accounts.authority.key();
        user.theater_name = name;
        user.theater_address = address;
        user.theater_inview_url = photo;

        msg!(" -Theater registered");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateAccount<'info> {
    #[account(
            init, 
            seeds = [b"user".as_ref(),authority.key().as_ref()],
            bump,
            payer = authority, 
            space = size_of::<TheaterAccount>() + NAME_LENGTH
        )
     ]
    pub user: Account<'info, TheaterAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: UncheckedAccount<'info>, 
}

#[account]
pub struct TheaterAccount {
    pub theater_name: String,
    pub theater_address: String,
    pub theater_inview_url: String,
    pub wallet_address: Pubkey,
}

#[account]
pub struct MovieAccount{
    pub movie_title: String,
    pub movie_genre: String,
    pub movie_languages: Vec<String>,
    pub movie_poster_url: String,
    pub ticket_price: u64
}

